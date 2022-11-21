import express from 'express';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelController.js';

const router = express.Router();

//create new hotel information
router.post('/create', createHotel);

//update existing hotel information
router.put('/update/:id', updateHotel);

//delete existing hotel information
router.delete('/delete/:id', deleteHotel);

//find selected hotel information
router.get('/find/:id', getHotel);

//find all hotel information
router.get('/find', getAllHotels);

export default router