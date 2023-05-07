const express= require('express')
const PORT=3000
const app=express()
const userRouter=require('./routes/user')
const postRouter=require('./routes/post')
const mongoose=require('mongoose')
app.use(express.json())

app.use('/user',userRouter)
app.use('/post',postRouter)




mongoose.connect("mongodb://127.0.0.1:27017/blogsApp",
{useNewUrlParser: true,useUnifiedTopology: true },
(err)=>{
    if (!err){
      return console.log("DB Connected");
    }
  })




app.listen(PORT,(err)=>{
    if(!err) return console.log(`server starts at port ${PORT}`);
})