import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getCityCount, getHotel, updateHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new hotel information
router.post('/create', verifyAdmin, createHotel);

//update existing hotel information
router.put('/update/:id', verifyAdmin, updateHotel);

//delete existing hotel information
router.delete('/delete/:id', verifyAdmin, deleteHotel);

//find selected hotel information
router.get('/find/:id', getHotel);

//find all hotel information
router.get('/find', getAllHotels);

//display city count
router.get('/countByCity', getCityCount);

export default router