const mongoose =require('mongoose')

const postSchema=new mongoose.Schema({
    title:String,
    body:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:"user"}

})
// real table name=user, schema=userSchema
const postModel=mongoose.model("post",postSchema)
module.exports=postModel