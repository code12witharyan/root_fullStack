import mongoose from "mongoose";


const orderItemScema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true},
    quantity:{
        type:Number,
        required:true,
        default:1
    }},{timestamps:true}
    )
const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,

    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:{
        type:[orderItemScema],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","cancelled","shipped","Delivered"],
        default:"pending"
    }
},{timestamps:true})

export const Order = mongoose.model("order",OrderSchema);