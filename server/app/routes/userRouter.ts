import express, { Router } from 'express'
import { getInfo, login, logout, refreshToken, register, updateInfo } from '../controllers/userController'
import { Auth } from '../helpers/middlewares/Auth'



const userRouter:Router = express.Router()


userRouter.post("/register" , register)
userRouter.post("/login" , login)
userRouter.get("/refresh_token" , refreshToken)
userRouter.get("/profile" ,Auth, getInfo)
userRouter.put("/profile" ,Auth, updateInfo)
userRouter.get("/logout" , logout)


export default userRouter