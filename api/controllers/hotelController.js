import Hotels from "../models/Hotels.js";

export const createHotel = async(req,res, next) => {
    try {
        const result = new Hotels(req.body);
        const data = await result.save();
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const updateHotel = async(req,res, next) => {
    try {
        const result = await Hotels.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const deleteHotel = async(req,res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json('Resource has been deleted successfully');
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getHotel = async(req,res, next) => {
    try {
        const result = await Hotels.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getAllHotels = async(req,res, next) => {
    try {
        const result = await Hotels.find(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}