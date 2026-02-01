const { Router } = require("express")
const { ClientModel } = require("../Db/db")

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
        password,
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
clientRouter.post("/login", async (req,res) => {
    let {email,password} = req.body;
    const user = await ClientModel.findOne({email,password})
    if(user){
        return res.send("Logged in successfully")
    }
    res.status(401).send("invalid user credentials")
})
module.exports = {
    clientRouter
}