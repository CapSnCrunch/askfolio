import { Router } from 'express';
import { 
  createAccount, 
  getAccount, 
  getCurrentAccount, 
  updateAccount, 
  deleteAccount, 
  listAccounts 
} from '../controllers/accountController';
import { 
  validateCreateAccount, 
  validateUpdateAccount, 
  validateAccountId, 
  validatePagination 
} from '../middleware/validation';

const router = Router();

/**
 * Account Routes
 */

// GET /api/account - List all accounts with pagination
router.get('/', validatePagination, listAccounts);

// POST /api/account - Create new account
router.post('/', validateCreateAccount, createAccount);

// GET /api/account/me - Get current user's account
router.get('/me', getCurrentAccount);

// GET /api/account/:id - Get account by ID
router.get('/:id', validateAccountId, getAccount);

// PUT /api/account/:id - Update account by ID
router.put('/:id', validateAccountId, validateUpdateAccount, updateAccount);

// DELETE /api/account/:id - Delete account by ID
router.delete('/:id', validateAccountId, deleteAccount);

export { router as accountRouter };
