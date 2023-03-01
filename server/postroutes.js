import express from 'express'
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from './post.js';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();
const router=express.Router();
cloudinary.config({cloudname:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET_KEY
})
//this route is to get all posts
router.route('/').get(async(req,res)=>{
    try{
         const posts= await Post.find({})
         res.status(200).json({success:true,data:posts})

    }catch(error){
        res.status(500).json({success:false,message:error})
    }})

// to create a post

router.route('/').post(async(req,res)=>{
   try{
    const{name,prompt,photo}=req.body;
    const photoUrl= await cloudinary.uploader.upload(photo);
    const newpost= await Post.create({name,prompt,photo:photoUrl.url})
    res.status(201).json({success:true,data:newpost})

   }catch(error){
      res.status(500).json({success:false,message:error})
   }

});

export default router;