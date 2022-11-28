import express from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new room information
router.post('/create/:hotelId', verifyAdmin, createRoom);

//update existing room information
router.put('/update/:id', verifyAdmin, updateRoom);

//delete existing room information
router.delete('/delete/:id/:hotelId', verifyAdmin, deleteRoom);

//find selected room information
router.get('/find/:id', getRoom);

//find all room information
router.get('/find', getAllRooms);

export default router