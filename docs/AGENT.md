Project Plan: AI-Powered Interactive Portfolio ("Digital Career Twin")

This project is a platform for creating AI-driven personal portfolios and blogs. It acts as a "digital career twin" — an interactive career companion that helps users showcase their experience, projects, skills, and expertise. Visitors such as recruiters, classmates, or collaborators can chat directly with the portfolio to ask questions, explore specific work, and download resumes or other resources.

Unlike static resumes, this platform provides a living, conversational profile that organizes personal data intelligently and makes it more engaging and accessible. It’s designed for job seekers, students, and professionals who want a smarter, more dynamic way to present themselves online.

### Goals
- Enable profile owners to upload, curate, and refine their professional context via a chat-first onboarding.
- Index and structure the owner’s data into a searchable knowledge base.
- Let visitors chat with the owner’s "digital twin" to learn about experience, projects, and interests, with sources and guardrails.
- Keep setup simple: Vue + Firebase on the web; lean serverless backend.

### Primary user journeys
- Owner (Profile Creator)
  - Onboard via chat: provide resume, links, and summaries; answer follow-up questions to enrich context.
  - Review and organize extracted content; tag items (projects, roles, skills).
  - Publish a public profile with a sharable URL and toggle visibility of sections.
- Visitor (Recruiter/Collaborator)
  - Land on a public profile page.
  - Chat with the digital twin; get answers citing the owner’s content.
  - View projects, skills, contact; download resume.

### MVP scope
- Chat-based ingestion for the owner (paste text, upload PDF resume, add links).
- Storage in Firebase (Auth, Firestore, Storage).
- Basic chunking + embeddings; retrieval-augmented chat for visitors.
- Public profile page with chat and selectable sources.
- Rate limiting and privacy controls (owner vs public).
- Admin owner tools: delete content, re-index, preview public page.

### Non-goals (MVP)
- Automated web crawling beyond provided links.
- Multi-tenant organizations/teams and complex access roles.
- Advanced analytics; multi-language support beyond English.

### Tech stack
- Frontend: Vue 3 (Vite), Tailwind (optional), component library minimal.
- Backend: Firebase Auth, Firestore, Cloud Storage, Cloud Functions (HTTP).
- LLM/Embeddings: provider-agnostic via server function (OpenAI/Anthropic/Gemini), embeddings (e.g., `text-embedding-3-small` or equivalent).
- Vector search:
  - MVP: store embeddings in Firestore; retrieve via server-side brute-force cosine similarity over the user’s chunks (sufficient for hundreds/thousands).
  - Later: switch to managed vector search (Vertex AI Vector Search or Pinecone).

### Firestore data model (proposed)
- users/{uid}
  - profile: { displayName, handle, photoURL, headline, location, bio, public: { enabled, sections: {...} }, createdAt, updatedAt }
  - settings: { allowPublicChat, rateLimits, providers }
  - sources/{sourceId}: { type: 'upload'|'url'|'manual', title, url, storagePath, status: 'ready'|'processing', createdAt }
  - documents/{docId}: { sourceId, kind: 'resume'|'project'|'blog'|'about'|'other', title, text, tokens, metadata, createdAt, updatedAt }
  - chunks/{chunkId}: { docId, text, hash, order, tokens, embedding: number[], createdAt }
  - chats/{chatId}
    - meta: { role: 'owner'|'visitor', audienceUserId?, publicHandle, createdAt }
    - messages/{messageId}: { role: 'user'|'assistant'|'system', content, citations: [chunkId], createdAt }

- publicProfiles/{handle}
  - index: { uid, visible: boolean, lastIndexedAt }
  - snapshot: denormalized public profile summary for quick landing load

### Storage
- Cloud Storage buckets
  - resumes/{uid}/{fileName}.pdf
  - uploads/{uid}/{id}/{fileName}
  - exports/{uid}/resume-latest.pdf

### Security & privacy
- Firebase Auth for owners; visitors chat anonymously or with session cookie.
- Firestore rules
  - `users/{uid}` readable/writable by owner; public fields denormalized to `publicProfiles/{handle}`.
  - Visitor chats cannot write to owner collections, only to visitor `chats` with `role = visitor` via callable/HTTP function guarded by rules.
- Consent
  - Owner chooses what is public; default private.
  - Clear upload terms for third-party content (e.g., GitHub link imports).
- PII handling
  - Redact emails/phone unless owner opts in to show publicly.
  - Delete requests remove docs and embeddings (GDPR-friendly control).

### Key workflows

Ingestion (Owner)
1. Owner signs in (Firebase Auth).
2. Starts onboarding chat; assistant asks for resume, links, and goals.
3. Owner uploads PDF or pastes text; server function extracts text (pdf parsing) and creates a `source`.
4. Server function creates `documents` and `chunks`; computes `embedding` for each chunk; writes to Firestore.
5. Assistant proposes a profile summary (headline, bio, skills); owner accepts/edits to update `profile`.
6. Owner previews public profile; toggles public sections; publishes.

Answering (Visitor)
1. Visitor opens `/{handle}` public page; gets public snapshot and chat UI.
2. Visitor asks a question; server function classifies intent (about projects/skills/contact, etc.).
3. Retrieval: perform embedding for question; find top-k chunks for `uid` via cosine similarity; optionally include a brief profile summary chunk.
4. Compose system prompt with guardrails (only answer from provided context; cite sources).
5. LLM returns answer with citations (chunkIds) and suggested links; response stored in `messages`.
6. UI renders answer with inline citations and expandable source snippets.

Owner chat (knowledge grooming)
- Owner can ask: "Create a project entry for X," "Summarize my role at Y," "Tag my skills."
- Assistant proposes structured updates; upon confirmation, writes updates to `documents` and `profile`.

### Retrieval & ranking (MVP)
- Chunking: ~500-800 tokens per chunk; overlap 50-100 tokens for continuity.
- Similarity: cosine similarity over owner’s chunks; re-rank by:
  - recency (documents.updatedAt),
  - source type priority (resume > projects > blog for most questions),
  - section diversity (avoid redundancy).
- Answer shaping: limit to N tokens; include 2-5 citations; decline if out-of-scope.

### Rate limits & abuse
- Per-IP and per-handle chat rate limiting via Cloud Functions.
- Basic prompt filtering; block PII leakage beyond public fields.
- CAPTCHA on bursty anonymous usage.

### UI sitemap (Vue)
- `/onboard` (owner-only): chat ingestion and profile setup.
- `/me` (owner-only): dashboard (sources, documents, chunks, publish controls).
- `/[handle]` (public): profile + chat.
- `/[handle]/projects/[id]` (public): optional project detail page.

### Components (initial)
- ChatUpload.vue: owner onboarding chat.
- KnowledgeTable.vue: owner view of documents/chunks with filters and delete.
- PublicProfile.vue: profile header, sections, and share controls.
- TwinChat.vue: public chat with citations.
- SourceCard.vue, ProjectCard.vue, SkillTag.vue.

### Cloud Functions (HTTP)
- POST `/api/ingest` (auth required)
  - body: { sourceType, fileUrl?, text?, url? }
  - actions: create source → extract → split → embed → store.
- POST `/api/answer` (public; rate-limited)
  - body: { handle, message, sessionId }
  - actions: classify → retrieve → answer → store message with citations.

### Prompts (sketch)
- System (owner ingestion)
  - "You help structure a user’s career data into profile fields, projects, and skills. Ask brief, targeted questions. Output JSON proposals when updating structured data."
- System (visitor answering)
  - "Answer strictly using the provided context about the profile. Cite sources. If unknown, say you don’t know and suggest what the owner could add."

### Testing plan
- Unit tests for chunking, similarity, and rule-based re-ranking.
- E2E tests for owner onboarding flow and public chat happy path.
- Firestore security rules tests for owner vs visitor isolation.

### Milestones
- Week 1: MVP ingestion + storage
  - Auth, onboarding chat scaffold, PDF upload, text extraction, chunk+embed, Firestore writes.
  - Basic `PublicProfile` with snapshot and static info.
- Week 2: Visitor chat + RAG
  - `/api/answer`, retrieval, citations; live public chat.
  - Profile publishing toggles and rules.
- Week 3: Polishing
  - Better chunking, re-ranking, analytics basics, rate limiting, styles, mobile layout.

### Open questions
- Which LLM/embedding provider to default to?
- Should we support GitHub/Notion imports in MVP?
- Where to run PDF parsing (client vs server) for reliability and cost?
- Do we want owner-approved Q/A examples on the public page?

### Next actions
- Set up Firebase project, Auth, Firestore, Storage.
- Implement `/api/ingest` and `/api/answer` Cloud Functions with provider-agnostic adapters.
- Build `ChatUpload.vue` and `TwinChat.vue` with streaming responses.
- Create Firestore security rules for owner/visitor separation.
- Add profile publishing toggle and `publicProfiles/{handle}` snapshot writer.