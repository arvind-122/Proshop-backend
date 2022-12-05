import mongoose from 'mongoose';




const reviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    name:{
       type:String,
       required:true,
    },
    comment :{
        type:String,
        required:true,
    },
   
    
})
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    NumReviews:{
        type:Number,
        required:true,
    },
    reviews:[reviewSchema],
})


const Product=new mongoose.model('Product',productSchema);

export default Product;