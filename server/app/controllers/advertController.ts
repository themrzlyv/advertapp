import { Request, Response } from "express";
import { IadvertData } from "../helpers/@types/AdvertData";
import { validateAdvert } from "../helpers/CostumError";
import Advert from "../models/Advert";



export const getAllAdverts = async (req:Request,res:Response) => {
    try {
        const adverts = await Advert.find({checked: true})
        return res.status(200).json({length: adverts.length, adverts})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getSingleAdvert = async (req:Request,res:Response) => {
    try {
        const {id} = req.params
        
        const advert = await Advert.findById({_id:id})
        if(!advert) return res.status(403).json({error: "Advert could not found! "})

        return res.status(200).json(advert)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}


export const createAdvert = async (req:Request,res:Response) => {
    try {
        const {
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook
        }:IadvertData = req.body

        const error = validateAdvert({title,image,tags,author,city,description,price,email})
        if(error) return res.status(403).json(error)

        const advert = await new Advert({
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook}).save()
        res.status(200).json({success:true})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const updateAdvert = async(req:Request,res:Response) => {
    try {
        const {id} = req.params

        const {
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook,
            checked
        }:IadvertData = req.body

        const error = validateAdvert({title,image,tags,author,city,description,price,email})
        if(error) return res.status(403).json(error)

        const advert = await Advert.findById({_id:id}, {
            title,
            image,
            tags,
            author,
            city,
            description,
            price,
            email,
            facebook,
            checked
        }, {
            new: true,
            runValidators: true
        })

        return res.status(200).json(advert)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}




export const deleteAdvert = async(req:Request,res:Response) => {
    try {
        const {id} = req.params

        const advert = await Advert.findByIdAndDelete({_id:id})

        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}