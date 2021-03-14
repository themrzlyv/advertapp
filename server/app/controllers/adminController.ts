import User from "../models/User"
import { Request, Response } from "express";
import { UserDataType } from "../helpers/@types/UserDataType";
import Advert from "../models/Advert";

export const getAllAdverts = async (req:Request,res:Response) => {
    try {
        const adverts = await Advert.find()
        return res.status(200).json({length: adverts.length, adverts})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const checkAdvert = async (req:Request,res:Response) => {
    try {
        // get id from params
        const {id} = req.params

        //get advert from db
        const advert = await Advert.findById(id)

        // change advert  
        advert.checked = !advert.checked

        // save advert
        await advert.save()
        return res.status(200).json(advert)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const deleteAdvert = async (req:Request,res:Response) => {
    try {
        // get id from params
        const {id} = req.params

        //get advert from db
        const advert = await Advert.findById(id)

        // delete advert
        await advert.remove()
        return res.status(200).json({success: true})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getAllUsers = async (req:Request,res:Response) => {
    try {
        const users:UserDataType [] = await User.find().select('-password')
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const changeRole = async (req:Request,res:Response) => {
    try {
        // get id from params
        const {id} = req.params

        //get user from db
        const user = await User.findById(id)

        //chekin user exist
        if(!user) return res.status(403).json({error: "User can not found"})

        // change user role 
        user.role = !user.role

        // save user 
        await user.save()
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const deleteUser = async (req:Request,res:Response) => {
    try {
        // get id from params
        const {id} = req.params

        //get user from db
        const user = await User.findById(id)

        //chekin user exist
        if(!user) return res.status(403).json({error: "User can not found"})

        if(user.role === true) return res.status(400).json({error: "Admin can not deleted!"})

        // delete user 
        await user.remove()
        return res.status(200).json({success: true})

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}