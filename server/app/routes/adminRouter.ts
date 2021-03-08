import express, { Router } from 'express'
import { changeRole, deleteUser, getAllUsers } from '../controllers/adminController'
import { Auth, getAdminAccess } from '../helpers/middlewares/Auth'


const adminRouter:Router = express.Router()

adminRouter.use([Auth,getAdminAccess])

// change role
// delete user
adminRouter.get("/users", getAllUsers)
adminRouter.get("/changeRole/:id",changeRole)
adminRouter.delete("/delete/:id",deleteUser)


export default adminRouter