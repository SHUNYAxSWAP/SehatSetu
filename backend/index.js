import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express'
import {connectDB} from './config/db.js'; 
import {doctorRouter} from './routes/doctorRoutes.js';



const app = express();
dotenv.config();

app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({limit:'20mb', extended:true}))
app.use(cors());
app.use(clerkMiddleware())

app.use("/api/doctors", doctorRouter)

const Port = process.env.PORT;
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`)
})