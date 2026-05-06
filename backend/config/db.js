import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const Mongo_Url = process.env.MONGOCONNECT;

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(Mongo_Url);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
    }
}