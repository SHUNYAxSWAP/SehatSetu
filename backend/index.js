import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({limit:'20mb', extended:true}))
app.use(cors());
app.use(clerkMiddleware())

const Port = 3000;

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})