import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authEndpoint from './routes/auth.js'
import userEndpoint from './routes/users.js'
import hotelEndpoint from './routes/hotels.js'
import roomEndpoint from './routes/rooms.js'

const app = express();
dotenv.config();

app.use(express.json());

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

//handler for all the routes erros
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