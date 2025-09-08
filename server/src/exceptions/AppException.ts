export class AppException extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ValidationException extends AppException {
  constructor(message: string = 'Validation failed') {
    super(message, 400);
  }
}

export class AuthenticationException extends AppException {
  constructor(message: string = 'Authentication failed') {
    super(message, 401);
  }
}

export class AuthorizationException extends AppException {
  constructor(message: string = 'Authorization failed') {
    super(message, 403);
  }
}

export class NotFoundException extends AppException {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

export class ConflictException extends AppException {
  constructor(message: string = 'Resource conflict') {
    super(message, 409);
  }
}

