const { where } = require("sequelize")
const TASK=require("../models/task.model")

const getTasks=async (req,res)=>{
 try{
const tasks=await TASK.findAll()
   res.status(200).json({msg:"success",data:tasks})
}
catch(error){
    res.status(401).json({msg:error.msg})
}
}

const postTask=async (req,res)=>{
 try{
    const {task}=req.body;
    if(!task){
        res.status(401).json({msg:"Kindly enter task"})
    }
  const tasks=await TASK.create({task})
   res.status(200).json({data:tasks})
}
catch(error){
    res.status(401).json({msg:error.message})
}
}
const updateTask=async (req,res)=>{
 try{
   res.status(200).json({msg:"Update task"})
}
catch(error){
    res.status(401).json({msg:error.msg})
}
}
const deleteTask=async (req,res)=>{
 try{
   const {id}=req.params
   console.log(id)
  await TASK.destroy({where:{id}})
   res.status(200).json({msg:"Delete task"})
}
catch(error){
    res.status(401).json({msg:error.msg})
}
}

module.exports={getTasks,postTask,updateTask,deleteTask}    