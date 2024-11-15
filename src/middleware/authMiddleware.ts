import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
    user?: string | object;
}

export const authMiddleware = (req: any, res: any, next: any): void => {
    // Get token from Authorization header
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_KEY as string) as { id: string, email: string };

        
        // Attach user info to request object
        
        const email = decoded.email;
        const id = decoded.id;
        // const userEmail = JSON.parse(email);
        req.headers.email = email;
        req.headers.id = id;
        
        

        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};
