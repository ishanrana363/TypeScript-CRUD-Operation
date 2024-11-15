import User from "../models/userModel"
import { Request, Response } from "express";

// Example function in controller
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body); // `req.body` should match IUser schema
        res.status(201).json({ status: "success", data: user });
    } catch (error:any) {
        res.status(400).json({ status: "fail", message: error.message });
    }
};