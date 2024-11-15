import express from 'express';
const router = express.Router();
import {createUser} from  "../controllers/userController" ;


router.post('/register', createUser );


export default router;

