Data Model (Draft)

Be aware that this design may change and updates to the plan within it may need to be adjusted as we implement.what

Purpose
- Define initial collections, document shapes, and access patterns to support owner ingestion, knowledge indexing, and public chat.
- Keep schema flexible and denormalized where it simplifies reads and security; refine after we align on key decisions below.

Goals & constraints
- Single-tenant per profile (scoped by uid); simple, secure rules.
- Support chat-first ingestion, RAG-style retrieval, and public visitor chat.
- MVP-scale first (hundreds to low-thousands of chunks per user), upgrade path to external vector search later.
- Minimize cold-start latency for public profile loads.

Core collections (proposed)
- users/{uid}
  - profile
  - settings
  - sources/{sourceId}
  - documents/{docId}
  - chunks/{chunkId}
  - chats/{chatId}/messages/{messageId}   (owner chats)
- publicChats/{handle}/sessions/{sessionId}/messages/{messageId}   (visitor chats; optional TTL)
- rateLimits/{handle}/sessions/{sessionId}   (optional; or store via Redis/Turnstile elsewhere)
- profiles/{handle}
  - index: { uid, visible, lastIndexedAt }
  - snapshot: denormalized public profile data

Concept intent (clarifications)
- profiles
  - Purpose: fast, world-readable snapshot of an owner’s public presence (headline, links, selected projects) keyed by handle.
  - Writes: only by trusted server code (publish/unpublish, snapshot updates); never directly by clients.
  - Reads: public, low-latency page loads and SEO-friendly content without joining owner-private docs.
  - Shape: small, denormalized `snapshot` for landing; `index` holds routing/visibility and `uid` mapping.
  - Lifecycle: created when owner reserves a handle, updated when owner publishes changes, hidden when `visible=false`.
- publicChats
  - Purpose: store conversations initiated by visitors to a public profile, kept separate from owner data for safety and rules simplicity.
  - Writes: via HTTP/callable function only (rate-limited, input-validated); append-only per session.
  - Reads: session-scoped for the originating visitor only. The profile owner cannot read any visitor sessions or messages.
  - Shape: `/publicChats/{handle}/sessions/{sessionId}/messages/{messageId}` ordered by `createdAt` with optional `ipHash`.
  - Lifecycle: created on first visitor message; optional TTL/cleanup policy to control storage costs.

Document sketches (MVP)
- users/{uid}/profile
  - displayName, handle, photoURL, headline, location, bio
  - public: { enabled, sections }
  - createdAt, updatedAt
- users/{uid}/sources/{sourceId}
  - type: 'upload'|'url'|'manual', title, url?, storagePath?, status, createdAt
- users/{uid}/documents/{docId}
  - sourceId, kind: 'resume'|'project'|'about'|'other'
  - title, text (normalized), tokens, metadata, createdAt, updatedAt
- users/{uid}/chunks/{chunkId}
  - docId, text, hash, order, tokens
  - embedding: number[]   (MVP) or storageRef (if offloaded)
  - createdAt
- users/{uid}/chats/{chatId}/messages/{messageId}
  - role: 'user'|'assistant'|'system', content, citations: [chunkId], createdAt
- profiles/{handle}/snapshot
  - minimal public view (headline, links, selected projects) for fast page load
- publicChats/{handle}/sessions/{sessionId}/messages/{messageId}
  - role, content, citations, createdAt, ipHash? (optional)


Indexes & queries (first-pass)
- profiles: composite index on {visible asc, handle asc}
- chunks: queries by {uid, docId} and/or {uid} for retrieval; filtered server-side for similarity
- chats/messages: ordered by createdAt

Security model (outline)
- users/{uid}/**: owner read/write; server functions may write on behalf for ingestion.
- profiles/**: world-readable snapshot; writes restricted to server.
- publicChats/**: append-only via callable/HTTP function; read session-locally; optional IP/session rate limits.
- Denormalize public fields to avoid exposing private owner docs.

Open decisions (to confirm before deepening)
- Embeddings location:
  - MVP in Firestore arrays vs. offload to Storage/external vector DB.
- Visitor chats:
  - Use separate `publicChats` with per-session isolation and optional TTL; do not expose messages to the owner. No analytics collection in MVP.
- Handle uniqueness:
  - Dedicated mapping collection (e.g., handles/{handle} -> uid) vs. embed in profiles only.
- Ingestion artifacts:
  - Keep raw extracted text in Firestore vs. Storage; retention policy.
- Scale expectations:
  - Target max chunks per user (order of magnitude) to tune retrieval strategy and cost.