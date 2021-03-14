import express, { Router } from 'express'
import { addFavorite, getInfo, login, logout, refreshToken, register, updateInfo } from '../controllers/userController'
import { Auth } from '../helpers/middlewares/Auth'



const userRouter:Router = express.Router()


userRouter.post("/register" , register)
userRouter.post("/login" , login)
userRouter.get("/refresh_token" , refreshToken)
userRouter.get("/profile" ,Auth, getInfo)
userRouter.put("/profile" ,Auth, updateInfo)
userRouter.put("/profile/favorite" ,Auth, addFavorite)
userRouter.get("/logout" , logout)


export default userRouter