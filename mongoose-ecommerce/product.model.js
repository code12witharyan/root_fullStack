import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    productImage :{
        type:String,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        default:0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true, 
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }


},{timestamps:true})


export const Products = mongoose.model("products",productSchema)