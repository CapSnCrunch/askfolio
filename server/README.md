# AskFolio Server

Backend API server for the AskFolio platform - an AI-powered interactive portfolio system.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health check

### Account Management
- `GET /api/account` - List all accounts (with pagination)
- `POST /api/account` - Create a new account
- `GET /api/account/:id` - Get account by ID
- `PUT /api/account/:id` - Update account by ID
- `DELETE /api/account/:id` - Delete account by ID
- `GET /api/account/me` - Get current user's account (requires auth - not implemented yet)

## API Examples

### Create Account
```bash
curl -X POST http://localhost:3001/api/account \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "SecurePassword123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Get Account
```bash
curl http://localhost:3001/api/account/{account-id}
```

### Update Account
```bash
curl -X PUT http://localhost:3001/api/account/{account-id} \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane"
  }'
```

### List Accounts (with pagination)
```bash
curl "http://localhost:3001/api/account?limit=10&offset=0"
```

### Delete Account
```bash
curl -X DELETE http://localhost:3001/api/account/{account-id}
```

## Data Model

### Account
```typescript
interface Account {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## Features

- ✅ Full CRUD operations for accounts
- ✅ Input validation and sanitization
- ✅ Password hashing (crypto-based, production should use bcrypt)
- ✅ Email uniqueness validation
- ✅ Pagination support
- ✅ Comprehensive error handling
- ✅ TypeScript support
- ✅ In-memory storage (easily replaceable with database)

## Architecture

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── routes/          # Route definitions
├── middleware/      # Validation and other middleware
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── index.ts         # Application entry point
```

## Security Notes

- Passwords are hashed using PBKDF2 with salt
- Input validation prevents basic injection attacks
- Email addresses are normalized (lowercase, trimmed)
- UUID validation for account IDs
- Rate limiting and authentication should be added for production

## Next Steps

- [ ] Add JWT authentication
- [ ] Integrate with Firebase/Firestore
- [ ] Add rate limiting
- [ ] Add comprehensive logging
- [ ] Add unit tests
- [ ] Add API documentation (OpenAPI/Swagger)