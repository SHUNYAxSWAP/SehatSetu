const dotenv = require("dotenv");
const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

dotenv.config();

const { clientRouter } = require('./Routes/client')
const { doctorRouter } = require('./Routes/doctor');

const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();

async function main() {
    await mongoose.connect(DATABASE_URL)
}

app.use(express.json())
app.use(cookieParser())
app.use("/user", clientRouter)
app.use("/doctor", doctorRouter)

app.get('/', (req, res) => {
    res.send("Working")
})
app.listen(port, () => {
    console.log(`The app is running on http://localhost:${port}`)
})

main();