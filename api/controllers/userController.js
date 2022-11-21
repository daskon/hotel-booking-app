import User from "../models/User.js";

export const updateUser = async(req,res, next) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const deleteUser = async(req,res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('Resource has been deleted successfully');
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getUser = async(req,res, next) => {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getAllUser = async(req,res, next) => {
    try {
        const result = await User.find(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}