import express from 'express';
import { createUser, loginUser } from '../controllers/userController';  // Ensure path is correct

const router = express.Router();

// Post route for user registration
router.post('/register', createUser);

// Post route for user login
router.post('/login', loginUser);

export default router;
