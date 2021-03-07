import express, { Router } from 'express'
import { createAdvert , deleteAdvert, getAllAdverts, getSingleAdvert, updateAdvert } from '../controllers/advertController'


const advertRouter:Router = express.Router()

advertRouter.get("/", getAllAdverts)
advertRouter.post("/", createAdvert)
advertRouter.get("/:id", getSingleAdvert)
advertRouter.put("/:id", updateAdvert)
advertRouter.delete("/:id", deleteAdvert)

export default advertRouter