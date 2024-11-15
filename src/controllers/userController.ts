import { Request, Response } from 'express';
import User from '../models/userModel';
import jwt from 'jsonwebtoken';

// Create User
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body); // `req.body` should match IUser schema
        res.status(201).json({ status: 'success', data: user });
    } catch (error: any) {
        res.status(400).json({ status: 'fail', message: error.message });
    }
};

// Login User
export const loginUser = async (req:any, res:any) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_KEY as string,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            token,
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error during login' });
    }
};

export const userProfile = async (req:any, res:any) => {
    try {
        const id = req.headers.id;
        let filter = {
            _id: id,
        }

        let data = await User.findOne(filter);
        res.status(200).json({ status:'success', data: data });

    } catch (error:any) {
        return res.status({
            status: 'fail',
            message: error.message
        })
    }
};