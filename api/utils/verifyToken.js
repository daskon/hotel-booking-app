import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "Unauthorized"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user) => {
        if (err) {
            return next(createError(401, "Invalid token"));
        }
        req.verified_user = user;
        next()
    });
}

export const verifyUser = (req,res, next) => {
    verifyToken(req,res, ()=>{
        if (req.verified_user.id === req.params.id || req.verified_user.isAdmin){
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    });
}

export const verifyAdmin = (req,res, next) => {
    verifyToken(req,res,next, ()=>{
        if (req.verified_user.isAdmin){
            next()
        } else {
            return next(createError(403, "You are not authorized"));
        }
    });
}