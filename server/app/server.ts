import express, { Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'
import ConnectDb from './helpers/ConnectDb'

dotenv.config()
const PORT:string | undefined = process.env.PORT

const app:Application = express()

ConnectDb()

app.use(express.json())
app.use(cors())
app.use("/api", routes)

app.listen(PORT,() => console.log(`Server is runing on ${PORT}`))