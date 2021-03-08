import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Request, Response } from "express";
import { loginValidator, regValidator } from '../helpers/CostumError';
import User from '../models/User';
import { createAccessToken, createRefreshToken } from '../helpers/GenerateToken';
import { Irequest } from '../helpers/@types/RequestUserType';
import { UserDataType } from '../helpers/@types/UserDataType';



export const register = async (req:Irequest,res:Response) => {
    try {
        const {name,avatar,email,password,about} = req.body

        // validate data from user
        const msg = regValidator(name,avatar,email,password)
        if(msg) return res.status(400).json({error: msg})

        // if user exists already
        const user = await User.findOne({email})
        if(user) return res.status(400).json({error: "This user is already exists"})

        // password hashing and creating new user
        const passwordhash = await bcrypt.hash(password,12)
        const newuser = await new User({
            name,
            email,
            avatar,
            password: passwordhash,
            about
        }).save()
        
        // Jwt generate
        const accesstoken:string = createAccessToken({id: newuser._id})
        const refreshtoken:string = createRefreshToken({id: newuser._id})

        // set new cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })

        res.status(200).json(accesstoken)

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const login = async (req:Irequest,res:Response) => {
    try {
        const {email,password} = req.body

        // validate data from user
        const msg = loginValidator(email,password)
        if(msg) return res.status(400).json({error: msg})

        // if user exists already
        const user:UserDataType = await User.findOne({email})
        if(!user) return res.status(400).json({error: "This user doesn't exists"})

        // control user password
        const isMatch:boolean = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({error: "Password is not valid"})

        // If login success , create access token and refresh token
        const accesstoken = createAccessToken({id: user._id})
        const refreshtoken = createRefreshToken({id: user._id})

        // set new token to cookie
        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })

        res.json(accesstoken)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const refreshToken = async (req:Irequest,res:Response) => {
    try {
        // checking cookie for tokens
        const ref_token:string = req.cookies.refreshtoken

        if(!ref_token) return res.status(400).json({error: "Please Login or Register"})

        // jwt verify token
        jwt.verify(ref_token, `${process.env.REFRESH_TOKEN_SECRET}`, (err:any,user:any):Response<void> => {
            // if any error 
            if(err) return res.status(400).json({error: "Please Login or Register"})

            //success token
            const accesstoken:string = createAccessToken({id: user.id})
            return res.json(accesstoken)
        })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getInfo = async (req:Irequest,res:Response) => {
    try {
        // getting data without password
        const user:UserDataType = await User.findById(req.user?.id).select('-password')

        //if user doesnt exist
        if(!user) return res.status(400).json({error: "User does not exist."})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const updateInfo = async (req:Irequest,res:Response) => {
    try {
        // getting data from request body
        const {name,email,avatar,favorites,about} = req.body

        // getting data without password
        const user:UserDataType = await User.findByIdAndUpdate(req.user?.id,{name,email,about,favorites,avatar},
            {
                new: true,
                runValidators: true
            }).select('-password')

        //if user doesnt exist
        if(!user) return res.status(400).json({error: "User does not exist."})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const logout = async (req:Irequest,res:Response) => {
    try {
        // clearing cookie
        res.clearCookie('refreshtoken')
        return res.json({message: "Logged out"})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}