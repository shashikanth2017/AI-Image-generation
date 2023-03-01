// import { Express } from "express";
import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectdb from './database.js';
import postroutes from './postroutes.js';
import airoutes from './airoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/api/v1/post',postroutes);
app.use('/api/v1/ai',airoutes);

app.get('/' ,async (req,res)=>{res.send('We are half-way ');})
const startserver=async()=>{
  try{  connectdb(process.env.MANGO_URL);
     app.listen(8080,console.log('server started http://localhost:8080'))}
  catch(error){console.log(error);}}
startserver();