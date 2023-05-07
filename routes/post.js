const express= require('express')
const router= express.Router()
const helpers = require('/home/semon/Desktop/Labs/Node-js/lab2/helper')
const UserModel = require('../model/user')
const postModel = require('../model/post')


router.get('/',(req,res)=>{
    postModel.find({},(err,posts)=>{
        if(!err) return res.status(200).json(posts)
        res.status(500).json({Error:"DB_ERR"})
    }).populate('author')
})
router.get('/:id',(req,res)=>{
    const { id }= req.params
    console.log(id);
    postModel.find({_id:id},(err,postData)=>{
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    }).populate('author')
})

router.post('/',(req,res) => {
    postModel.create({ ...req.body},(err,postData)=>{
        console.log(err);
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"}) 
    })
})

router.put('/:id',(req,res)=>{
    const { id }= req.params
    postModel.updateOne({_id:id, ...req.body},(err,postData)=>{
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    })
})

router.delete('/:id',(req,res)=>{
    const { id }= req.params
    postModel.deleteOne({_id:id},(err,postData)=>{
        if(!err) return res.status(200).json(postData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    })

})

module.exports= router