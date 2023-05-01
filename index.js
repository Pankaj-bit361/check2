
const express=require("express")

const cors=require("cors")
const { connection } = require("./db")
const { UserRouter } = require("./Routes/user.route")
const app=express()
require("dotenv").config()
app.use(cors())
app.use(express.json())

app.get("/",async(req,res)=>{
    res.send({"msg":"HomePage"})
})

app.use("/users",UserRouter)
app.listen(process.env.port, async(req,res)=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log(`connected to te port ${process.env.port}`)
})