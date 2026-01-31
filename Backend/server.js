const express = require('express');
const mongoose = require('mongoose')
const dotenv = require("dotenv");
const {clientRouter} = require('./Routes/client')
const {ClientModel} = require('./Db/db')

dotenv.config();

const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();

async function main(){
    await mongoose.connect(DATABASE_URL)
}

app.use(express.json())
app.use("/user", clientRouter)

app.get('/',(req,res)=>{
    res.send("Working")
})
app.listen(port,()=>{
    console.log(`The app is running on http://localhost:${port}`)
})

main();