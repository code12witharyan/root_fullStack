import mongoose  from "mongoose";
import express from "express";

const userSchema = new mongoose.Schema({
    name : {type : String , required : true , unique : true , trim : true , lowercase : true},
    age : Number,
    email : String,
    password :{type : String , required : true , minlength : 8 , maxlength : 16},
    createdAt : {type : Date , default : Date.now},
    updatedAt : {type : Date , default : Date.now},

},{timestamps : true})

export const User = mongoose.model("User" , userSchema) 

  