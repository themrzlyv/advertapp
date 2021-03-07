import express, { Router } from 'express'
import advertRouter from './advertRouter'


const routes:Router = express.Router()

routes.use("/adverts", advertRouter)

export default routes