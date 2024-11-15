import categoryModel from "../models/categoryModel";

import express, { Request, Response } from 'express';

export const createCategory = async (req: any, res: any) => {
    try {
        let {name,img} = req.body;
        let category = new categoryModel({name, img});
        await category.save();
        return res.status(201).json({
            status:"success",
            message:"Category created successfully",
            data:category
        })
    } catch (error: any) {
        return res.status(500).json({
            status:"fail",
            message:error.message
        });
    }
};