import express from 'express';
import { createUser, loginUser, userProfile } from '../controllers/userController';  // Ensure path is correct
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

// Post route for user registration
router.post('/register', createUser);

// Post route for user login
router.post('/login', loginUser);

router.get(`/user-profile`,authMiddleware,userProfile )

export default router;
