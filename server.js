const app=require('./app');
const env=require('dotenv').config();
const sequelize=require('./config/db')
const TASK=require('./models/task.model')
const port=process.env.PORT;
(async ()=>{
    try{
        await sequelize.authenticate()
        await TASK.sync({force:false})
        console.log(`Database connected successfully!!`)
    }
    catch(error){
        console.log(`Error while connecting database ${error}`)
    }
})()
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while starting server ${err}`)
    }
    else{
        console.log(`Server started successfully at port : ${port}`)
    }
})