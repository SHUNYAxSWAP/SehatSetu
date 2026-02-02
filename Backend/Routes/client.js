const { Router } = require("express")
const { ClientModel } = require("../Db/db")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { userMiddleware } = require('../Middleware/clientMiddleware')

const JWT_CLIENT_SECRET = process.env.JWT_CLIENT_SECRET;

const clientRouter = Router();

clientRouter.post('/signup', async (req, res) => {
    let {
        email,
        password,
        name,
        phone,
        age,
        height,
        weight,
        gender,
        disease,
        location
    } = req.body;
    await ClientModel.create({
        email,
        password: await bcrypt.hash(password, 10),
        name,
        phone,
        age,
        height,
        weight,
        gender,
        disease,
        location
    })
    res.send("Signed up successfully")
})
clientRouter.post("/login", async (req, res) => {
    let { email, password } = req.body;
    const user = await ClientModel.findOne({ email })
    if (user) {
        let hashedPass = await bcrypt.compare(password, user.password);
        if (hashedPass) {
            let id = user._id;
            let token = jwt.sign({
                id
            }, JWT_CLIENT_SECRET)
            return res.cookie("token", token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
                sameSite: "lax"
            }).json("Logged in")
        }

        res.status(401).send("invalid user credentials")
    }
})
clientRouter.get("/", userMiddleware, async (req, res) => {
    res.send("Welcome user")
})
module.exports = {
    clientRouter
}