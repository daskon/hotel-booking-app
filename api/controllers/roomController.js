import Hotels from "../models/Hotels.js";
import Room from "../models/Room.js";

export const createRoom = async (req,res,next) => {
    const hotelId = req.params.hotelId;
    const rooms = new Room(req.body);
    try {
        const stored_rooms = await rooms.save();
        try{
            await Hotels.findByIdAndUpdate(hotelId, {
                $push: {room_id: stored_rooms._id }
            });
        } catch(err) {
            next(err);
        }
        res.status(200).json(stored_rooms);
    } catch (err) {
        next(err)
    }
}

export const updateRoom = async(req,res, next) => {
    try {
        const result = await Room.findByIdAndUpdate(req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const deleteRoom = async(req,res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotels.findByIdAndUpdate(hotelId, {
                $pull: {room_id: req.params.id }
            });
        } catch(err) {
            next(err);
        }
        res.status(200).json('Room has been deleted successfully');
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getRoom = async(req,res, next) => {
    try {
        const result = await Room.findById(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getAllRooms = async(req,res, next) => {
    try {
        const result = await Room.find(req.params.id);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getHotelRooms = async (req, res, next) => {
    try{
        const hotel = await Hotels.findById(req.params.id);
        const list = await Promise.all(hotel.room_id.map((room)=>{
            return Room.findById(room);
        }));
        return res.status(200).json(list);
    } catch(err){
        next(err);
    }
}

export const updateAvailableRooms = async (req, res, next) => {
    try {
        await Room.updateOne(
            {"room_numbers._id":req.params.id},
            {
                $push: {
                    "room_numbers.$.unavailable_on": req.body.dates
                }
            }
        );
        res.status(200).json('Room Availabilities has been updated');
    } catch (err) {
        next(err);
    }
}