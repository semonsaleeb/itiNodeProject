const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    age:{type:Number, min:18}

})
// real table name=user, schema=userSchema
const UserModel=mongoose.model("user",userSchema)
module.exports=UserModel