const { Router } = require("express");
const { DoctorModel } = require("../Db/db");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const JWT_DOCTOR_SECRET = process.env.JWT_DOCTOR_SECRET;

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
        password: await bcrypt.hash(password, 10),
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
doctorRouter.post('/login', async (req, res) => {
    let { email, password } = req.body;
    const doctor = await DoctorModel.findOne({ email })
    if (doctor) {
        let hashedPass = await bcrypt.compare(password, doctor.password);
        if (hashedPass) {
            let id = doctor._id;
            let token = jwt.sign({
                id
            }, JWT_DOCTOR_SECRET)
            return res.cookie("token", token, {
                httpOnly: true,
                maxAge: 3 * 24 * 60 * 60 * 1000,
                sameSite: "lax"
            }).json("Logged in")
        }
        res.status(401).send("invalid user credentials")
    }
})

module.exports = {
    doctorRouter
}