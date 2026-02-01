const { Router } = require("express");
const { DoctorModel } = require("../Db/db");

const doctorRouter = Router();

doctorRouter.get(('/'), async (req, res) => {
    res.send("Doctor WOrking")
})

doctorRouter.post(('/signup'), async (req, res) => {
    let {
        name,
        email,
        password,
        phone,
        specialization,
        experience,
        location,
        availiability,
        verified,
        createdAt
    } = req.body
    await DoctorModel.create({
        name,
        email,
        password,
        phone,
        specialization,
        experience,
        location,
        availiability,
        verified,
        createdAt
    })
    res.send("Doctor Signed up")
})
doctorRouter.post('/login', async (req,res)=>{
    let {email, password} = req.body;
    const user = await DoctorModel.findOne({email,password});
    if(user){
        return res.send("Doctor Logged in")
    }
    return res.status(401).send("User credenitial invalid")
})

module.exports = {
    doctorRouter
}