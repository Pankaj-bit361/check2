
const mongoose =require("mongoose")

const UserSchema=mongoose.Schema({
"email":String,
"password":String,
"name":String
},{
    versionKey:false
})


const UserModel=mongoose.model("user2",UserSchema)

module.exports={
    UserModel
}