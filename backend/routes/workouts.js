const express = require('express');

const Workout=require("../modules/workout");
const workout = require('../modules/workout');
const { default: mongoose } = require('mongoose');
const router = express.Router();


router.get("/users",async(req,res)=>{
    res.json({mssg:"get single"})
    const {title ,reps ,load}=req.body;
    try{
        const work = await Workout.find({});

    }catch (err) {
        console.log(err)
    }
})

router.get("/users/:id",async(req,res)=>{
    res.json({mssg:"get single"})
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: err.message})
    }
        const work = await Workout.findById({id});
        res.status(200).json(workout)

    
})
router.post("/users", async(req,res)=>{
    const {title }=req.body;
    try{
        const work = await Workout.create( {title});
        res.status(200).json(workout)

    }catch (err) {
        res.status(400).json({err: err.message})
    }
})
router.delete("/users/:id",async(req,res)=>{
    const {id}=req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: err.message})
    }    
    const work = await Workout.findOneAndDelete({_id:id},{
        ...req.body}
    );
    res.status(200).json(workout)

})
router.patch("/users/:id",async(req,res)=>{
   
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err: err.message})
    }
        const work = await Workout.findOneAndUpdate({_id:id});
        res.status(200).json(workout)

   
})

module.exports=router
