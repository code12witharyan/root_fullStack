import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    content:{
        type : String , required : true , trim : true
    },
    complete:{type : Boolean , default : false
    },

    createdBy :{
        type : mongoose.Schema.Types.ObjectId , ref : "User" , required : true 
    }
 
},{timestamps : true});

export const SubTodo = mongoose.models("SubTodo" , toDoSchema);