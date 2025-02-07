const express=require("express");
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const task=require('./routes/task.route')

app.use('/task',task)
module.exports=app