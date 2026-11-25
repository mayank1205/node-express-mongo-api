const Product=require('../models/Product');
exports.createProduct=async(req,res)=>{
 const p=await Product.create({...req.body,createdBy:req.user.id});
 res.status(201).json(p);
};
exports.getProducts=async(req,res)=>res.json(await Product.find());
exports.getProduct=async(req,res)=>res.json(await Product.findById(req.params.id));
exports.updateProduct=async(req,res)=>res.json(await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}));
exports.deleteProduct=async(req,res)=>{await Product.findByIdAndDelete(req.params.id);res.json({message:'Deleted'});};
