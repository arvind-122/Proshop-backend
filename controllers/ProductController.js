import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

// @desc:  to fetch all products
//@route : GET/api/products
//@acess: public

const getProducts=asyncHandler(async(req,res)=>{
        try {
            const products=await Product.find();
            res.status(200).send(products);
            
        } catch (error) {
            res.status(401).send({error:error.message})
        }
    }
);
// @desc:  to fetch singleproduct from id 
//@route : GET/api/products/:_id
//@acess: public

const getProduct=asyncHandler(async(req,res)=>{
        try {
            const {_id}=req.params
            const product=await Product.find({_id});
            res.status(200).send(product);
            
        } catch (error) {
            res.status(401).send({error: error.message})
        }
    }
);
// @desc:  to create a product
//@route : POST/api/products
//@acess: private

const createProduct=asyncHandler(async(req,res)=>{
        try {
            const data=req.body;
            const result=await Product.find({data});
            res.status(200).send(result);
            
        } catch (error) {
            res.status(401).send({error: error.message})
        }
    }
);
// @desc:  to update a product by id
//@route : Put/api/products/:_id
//@acess: private

const updateProduct=asyncHandler(async(req,res)=>{
        try {
            const {_id}=req.params;
            const data=req.body;
            const result=await Product.update({_id},{$sset:{data}});
            res.status(200).send(result);
            
        } catch (error) {
            res.status(401).send({error: error.message})
        }
    }
);
// @desc:  to delete specific  product by id
//@route : DELETE/api/products/:_id
//@acess: private

const deleteProduct=asyncHandler(async(req,res)=>{
        try {
            const {_id}=req.params;
           
            const result=await Product.deleteOne({_id});
            res.status(200).send(result);
            
        } catch (error) {
            res.status(401).send({error: error.message})
        }
    }
);

export { getProducts,getProduct,createProduct,updateProduct,deleteProduct};