const express= require('express')
const router= express.Router()
const helpers = require('/home/semon/Desktop/Labs/Node-js/lab2/helper')
const UserModel = require('../model/user')


router.get('/',(req,res)=>{
    UserModel.find({},(err,users)=>{
        if(!err) return res.status(200).json(users)
        res.status(500).json({Error:"DB_ERR"})
    })
})
router.get('/:id',(req,res)=>{
    const { id }= req.params
    console.log(id);
    UserModel.find({_id:id},(err,userData)=>{
        if(!err) return res.status(200).json(userData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    })
})

router.post('/',(req,res) => {
    UserModel.create({ ...req.body},(err,userData)=>{
        if(!err) return res.status(200).json(userData)
        res.status(500).json({Error:"DB_ERR"}) 
    })
})

router.put('/:id',(req,res)=>{
    const { id }= req.params
    UserModel.updateOne({_id:id, ...req.body},(err,userData)=>{
        if(!err) return res.status(200).json(userData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    })
})

router.delete('/:id',(req,res)=>{
    const { id }= req.params
    UserModel.deleteOne({_id:id},(err,userData)=>{
        if(!err) return res.status(200).json(userData)
        res.status(500).json({Error:"DB_ERR"})
        // console.log(err);
    })

})

module.exports= router