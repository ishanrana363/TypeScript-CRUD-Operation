import express from 'express';
import { createUser, loginUser, userProfile } from '../controllers/userController';  // Ensure path is correct
import { authMiddleware } from '../middleware/authMiddleware';
import {allCategory, createCategory, deleteCategory, updateCategory} from "../controllers/categoryController"

const router = express.Router();

// Post route for user registration
router.post('/register', createUser);

// Post route for user login
router.post('/login', loginUser);
router.get(`/user-profile`,authMiddleware,userProfile);

// category related api
router.post('/category',authMiddleware, createCategory); // create a new category
router.put("/category-update/:id", authMiddleware, updateCategory);
router.delete("/category-delete/:id",authMiddleware, deleteCategory );
router.get("/all-categories",authMiddleware, allCategory);

export default router;
