import type { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';
import { AuthenticationException } from '../exceptions/AppException';

export type { Request, Response, NextFunction };

export interface AuthenticatedRequest<T = any> extends Request {
  userId?: string;
  isAdmin?: boolean;
  body: T;
}

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Middleware to authenticate user requests
 * @param authService - The authentication service instance
 * @returns Middleware function
 */
export const authenticateUser = () => {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.headers.authorization?.split('Bearer ')[1];
      if (!token) {
        throw new AuthenticationException('No token provided');
      }

      const decodedToken = await admin.auth().verifyIdToken(token);
      const userId = decodedToken.uid;
      req.userId = userId;
      
      // Check if user is admin based on custom claims
      req.isAdmin = decodedToken.admin === true;
      
      next();
    } catch (error) {
      // If it's already an AppException, re-throw it
      if (error instanceof AuthenticationException) {
        throw error;
      }
      
      // If it's a Firebase auth error, convert to AuthenticationException
      throw new AuthenticationException('Invalid token');
    }
  };
};
