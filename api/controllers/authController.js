import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req,res,next) => {
    try {
        const { username,email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const result = new User({
            user_name: username,
            email: email,
            password: hash
        });
        await result.save();
        return res.status(201).json("New User has been registered");
    } catch (err) {
        next(err);
    }
}

export const login = async (req,res,next) => {
    try {
        const user = await User.findOne({user_name: req.body.username});
        if (!user) {
            return next(createError(404,"User not found"));
        }
        const validatePassword = await bcrypt.compare(req.body.password, user.password);
        if (!validatePassword) {
            return next(createError(400,"Invalid password"));
        }
        //hide password hash
        const {password, is_admin, ...args} = user._doc

        const token = jwt.sign({
                                id: user._id,
                                isAdmin: user.is_admin
                                },
                                process.env.JWT_SECRET
                            );

        return res.cookie("access_token",token, {
            httpOnly: true
        }).status(200).json(args);
    } catch (err) {
        next(err);
    }
}