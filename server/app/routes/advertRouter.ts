import express, { Router } from 'express'
import { createAdvert , deleteAdvert, getAllAdverts, getSingleAdvert, updateAdvert } from '../controllers/advertController'
import { Auth, getAdminAccess } from '../helpers/middlewares/Auth'


const advertRouter:Router = express.Router()

advertRouter.get("/", getAllAdverts)
advertRouter.post("/", createAdvert)
advertRouter.get("/:id", getSingleAdvert)
advertRouter.put("/:id", Auth , getAdminAccess ,updateAdvert)
advertRouter.delete("/:id", Auth , getAdminAccess, deleteAdvert)

export default advertRouter