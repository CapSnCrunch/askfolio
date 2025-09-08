import express from 'express';
import { Router } from 'express';
import multer from 'multer';
import { StatusCodes } from 'http-status-codes';
import { AuthenticatedRequest } from '../middleware/validation';
import { authenticateUser } from '../middleware/validation';
import { AccountService } from '../services/accountService';
import { ImageService } from '../services/image.service';
import {
  CreateAccountRequest,
  UpdateAccountRequest,
} from '../types/account';
import { isValidEmail, sanitizeString } from '../utils/helpers';
import logger from '../lib/logger';

export class AccountController {
  constructor(private accountService: AccountService, private imageService: ImageService) {}

  registerRoutes(router: Router, upload: multer.Multer): void {
    // Create account
    router.post('/',
      authenticateUser(),
      upload.single('image'),
      async (req: AuthenticatedRequest<CreateAccountRequest>, res: express.Response) => {
        try {
          // Validation
          const { email, name } = req.body;
          const errors: Array<{ field: string; message: string }> = [];

          if (!email) {
            errors.push({ field: 'email', message: 'Email is required' });
          } else if (!isValidEmail(email)) {
            errors.push({ field: 'email', message: 'Please provide a valid email address' });
          }

          if (errors.length > 0) {
            res.status(StatusCodes.BAD_REQUEST).json({
              success: false,
              message: 'Validation failed',
              errors
            });
            return;
          }

          let profileImagePath: string | undefined;
          
          // If a profile image was uploaded, process it
          if (req.file) {
            profileImagePath = await this.imageService.uploadProfileImage(
              req.file.buffer,
              req.file.mimetype,
              req.userId!
            );
          }

          await this.accountService.createAccount(
            req.userId!, 
            email.toLowerCase().trim(), 
            name ? sanitizeString(name) : undefined, 
            profileImagePath
          );
          
          logger.info(`Account created for user ${req.userId} (${email})`);
          res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Account created successfully'
          });
        } catch (error) {
          logger.error({ error: error }, 'Error creating account');
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to create account'
          });
        }
      }
    );

    // Get current user's account
    router.get('/me',
      authenticateUser(),
      async (req: AuthenticatedRequest, res: express.Response) => {
        try {
          const account = await this.accountService.getAccount(req.userId!);
          res.status(StatusCodes.OK).json({
            success: true,
            account
          });
        } catch (error) {
          logger.error({ error: error }, 'Error fetching current account');
          res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: 'Account not found'
          });
        }
      }
    );

    // Update current user's account
    router.put('/me',
      authenticateUser(),
      upload.single('image'),
      async (req: AuthenticatedRequest<UpdateAccountRequest>, res: express.Response) => {
        try {
          // Validation
          const { email, name } = req.body;
          const errors: Array<{ field: string; message: string }> = [];

          if (email !== undefined) {
            if (!email) {
              errors.push({ field: 'email', message: 'Email cannot be empty' });
            } else if (!isValidEmail(email)) {
              errors.push({ field: 'email', message: 'Please provide a valid email address' });
            }
          }

          if (errors.length > 0) {
            res.status(StatusCodes.BAD_REQUEST).json({
              success: false,
              message: 'Validation failed',
              errors
            });
            return;
          }

          let profileImagePath: string | undefined;
          
          // If a profile image was uploaded, process it
          if (req.file) {
            profileImagePath = await this.imageService.uploadProfileImage(
              req.file.buffer,
              req.file.mimetype,
              req.userId!
            );
          }

          const updateData: Partial<UpdateAccountRequest> = {};
          if (email) updateData.email = email.toLowerCase().trim();
          if (name) updateData.name = sanitizeString(name);
          if (profileImagePath) updateData.profileImagePath = profileImagePath;

          const account = await this.accountService.updateAccount(req.userId!, updateData);
          
          res.status(StatusCodes.OK).json({
            success: true,
            message: 'Account updated successfully',
            account
          });
        } catch (error) {
          logger.error({ error: error }, 'Error updating account');
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to update account'
          });
        }
      }
    );

    // Delete current user's account
    router.delete('/me',
      authenticateUser(),
      async (req: AuthenticatedRequest, res: express.Response) => {
        try {
          await this.accountService.deleteAccount(req.userId!);
          res.status(StatusCodes.OK).json({
            success: true,
            message: 'Account deleted successfully'
          });
        } catch (error) {
          logger.error({ error: error }, 'Error deleting account');
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Failed to delete account'
          });
        }
      }
    );
  }
}
