import jwt from "jsonwebtoken";
import { Response , NextFunction } from "express";
import User from "../../models/User";
import { Irequest } from "../@types/RequestUserType";
import { UserDataType } from "../@types/UserDataType";




export const Auth = async (req:Irequest ,res:Response,next:NextFunction) => {
    try {
        //checking token exist
        const token: string | undefined = req.header('Authorization')
        if(!token) return res.status(403).json({error: "Invalid Authentication"})

        // jwt verify accesstoken
        jwt.verify(token,`${process.env.ACCESS_TOKEN_SECRET}`, (err:any,user: object | undefined) => {
            // if any error 
            if(err) return res.status(400).json({error: "Invalid Authorization"})

            // success token
            req.user = user
            next()
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getAdminAccess = async(req:Irequest,res:Response,next:NextFunction) => {
    try {
        // get user id from req user
        const user:UserDataType = await User.findById({_id:req.user?.id})

        //checking role
        if(user.role === false) 
            return res.status(403).json({error: "Admin resources access denied"})

        next()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}