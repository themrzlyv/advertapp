import express, { Router } from 'express'
import {  changeRole, checkAdvert, deleteAdvert, deleteUser, getAllAdverts, getAllUsers } from '../controllers/adminController'
import { Auth, getAdminAccess } from '../helpers/middlewares/Auth'


const adminRouter:Router = express.Router()

adminRouter.use([Auth,getAdminAccess])

// change role
// delete user
adminRouter.get("/users", getAllUsers)
adminRouter.get("/changeRole/:id",changeRole)
adminRouter.delete("/delete/:id",deleteUser)

// check adverts and update
adminRouter.get("/adverts" , getAllAdverts)
adminRouter.get("/advert/checked/:id",checkAdvert)
adminRouter.delete("/advert/delete/:id",deleteAdvert)


export default adminRouter