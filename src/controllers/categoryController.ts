import categoryModel from "../models/categoryModel";

import express, { Request, Response } from 'express';

export const createCategory = async (req: any, res: any) => {
    try {
        let { name, img } = req.body;
        let category = new categoryModel({ name, img });
        await category.save();
        return res.status(201).json({
            status: "success",
            message: "Category created successfully",
            data: category
        })
    } catch (error: any) {
        return res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

export const updateCategory = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, img } = req.body;
    let filter = {
        _id: id
    }

    try {
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            filter,
            { name, img },
            { new: true } // Return the updated document
        );

        if (!updatedCategory) {
            return res.status(404).json({ status: "fail", message: "Category not found" });
        }

        res.status(200).json({
            status: "success",
            message: "Category updated successfully",
            data: updatedCategory,
        });
    } catch (error: any) {
        res.status(500).json({ status: "fail", message: error.message });
    }
};


export const deleteCategory = async (req: any, res: any) => {
    const id = req.params.id;
    try {
        let filter = {
            _id : id
        };
        let data = await categoryModel.findByIdAndDelete(filter);
        if (!data) {
            return res.status(404).json({ status: "fail", message: "Category not found" });
        }
        res.status(200).json({
            status: "success",
            message: "Category deleted successfully",
            data: data
        });
    } catch (error:any) {
        return res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};

export const allCategory = async (req:any,res:any)=>{
    try {
        let data = await categoryModel.find();
        return res.status(200).json({
            status: "success",
            message: "All categories",
            data: data
        })
    } catch (error:any) {
        return res.status(500).json({
            status: "fail",
            message: error.message
        });
    }
};