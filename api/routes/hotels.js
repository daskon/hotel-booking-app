import express from 'express';
import Hotels from '../models/Hotels.js';

const router = express.Router();

//create new hotel information
router.post('/create', async (req, res, next) => {
    try {
        const result = new Hotels(req.body);
        const data = await result.save();
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

//update existing hotel information
router.put('/update/:id', async (req, res, next) => {
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
});

//delete existing hotel information
router.delete('/delete/:id', async (req, res, next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id);
        res.status(200).json('Resource has been deleted successfully');
    } catch (err) {
        console.log(err);
        next(err);
    }
});

//find selected hotel information
router.get('/find/:id', async (req, res, next) => {
    try {
        const result = await Hotels.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

//find all hotel information
router.get('/find', async (req, res, next) => {
    try {
        const result = await Hotels.find(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
});

export default router