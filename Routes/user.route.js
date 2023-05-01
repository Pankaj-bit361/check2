
const express=require("express")
const { UserModel } = require("../Model/user.model")

const UserRouter=express.Router()


UserRouter.post("/add",async(req,res)=>{
    try {
        let user=new UserModel(req.body)
        await user.save()
        res.send({"msg":"user added successfully"})
    } catch (error) {
        res.send({"err":error.message})
    }
})


UserRouter.get("/",async(req,res)=>{
    try {
        let users=await UserModel.find()
        res.send(users)
    } catch (error) {
        res.send({"err":error.message})
    }
})

module.exports={
    UserRouter
}