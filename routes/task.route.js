const express=require("express")
const routes=express.Router()
const {getTasks,postTask,updateTask,deleteTask}=require("../controllers/task.controller")

routes.get('/',getTasks)
routes.post('/',postTask)
routes.patch('/:id',updateTask)
routes.delete('/:id',deleteTask)

module.exports=routes