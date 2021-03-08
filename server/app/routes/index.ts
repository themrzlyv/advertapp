import express, { Router } from 'express'
import adminRouter from './adminRouter'
import advertRouter from './advertRouter'
import userRouter from './userRouter'


const routes:Router = express.Router()

routes.use("/adverts", advertRouter)
routes.use("/user", userRouter)
routes.use("/admin", adminRouter)

export default routes