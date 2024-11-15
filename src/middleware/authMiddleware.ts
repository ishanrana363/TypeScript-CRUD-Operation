import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
    user?: string | object;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) return res.status(401).json({ message: "No token, authorization denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY as any);
        console.log(decoded);
        next();
    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
};
