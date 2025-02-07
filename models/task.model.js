const sequelize=require('../config/db')
const {DataTypes}=require('sequelize')

const TASK=sequelize.define('Task',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV1,
        primaryKey:true,
        autoIncrement:true
    },
    task:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=TASK