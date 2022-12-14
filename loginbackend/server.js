const express=require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')

const routesUrls=require('./routes/routes.js')
const cors=require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS,()=> console.log("database connected"))

app.use(express.json())
app.use('./app', routesUrls)
app.use(cors())
app.listen(4000,() =>console.log("sever is running"))
