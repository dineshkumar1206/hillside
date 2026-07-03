import express from 'express';
import {
  getWhyChooseItems,
  createWhyChooseItem,
  updateWhyChooseItem,
  deleteWhyChooseItem
} from '../controllers/whyChooseController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route to fetch cards for the home page
router.get('/', getWhyChooseItems);

// Admin-only protected routes for managing cards in the dashboard
router.post('/', authenticateToken, createWhyChooseItem);
router.put('/:id', authenticateToken, updateWhyChooseItem);
router.delete('/:id', authenticateToken, deleteWhyChooseItem);

export default router;
