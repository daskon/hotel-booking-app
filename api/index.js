import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authEndpoint from './routes/auth.js';
import userEndpoint from './routes/users.js';
import hotelEndpoint from './routes/hotels.js';
import roomEndpoint from './routes/rooms.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch(err) {
        throw err;
    }
}

//middleware
app.use('/api/auth', authEndpoint);
app.use('/api/users', userEndpoint);
app.use('/api/hotels', hotelEndpoint);
app.use('/api/rooms', roomEndpoint);
app.use('/api/countByCity', hotelEndpoint);

//central point to handle all routes errors
app.use((err,req,res,next)=>{
    let errStatus = req.status || 500;
    let errMessage = err.message || "Error has occurred";
    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack
    });
})

app.listen(8800 || process.env.PORT, ()=> {
    connect();
    console.log('Server listening on port 8800');
})