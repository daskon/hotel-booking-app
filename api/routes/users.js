import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//update existing user information
router.put('/update/:id', verifyUser, updateUser);

//delete existing user information
router.delete('/delete/:id', verifyUser, deleteUser);

//find selected user information
router.get('/find/:id', verifyUser, getUser);

//find all user information
router.get('/find',verifyAdmin, getAllUser);

export default router