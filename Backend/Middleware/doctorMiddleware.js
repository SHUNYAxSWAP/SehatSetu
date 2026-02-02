const jwt = require("jsonwebtoken");
const JWT_DOCTOR_SECRET = process.env.JWT_DOCTOR_SECRET;

function doctorMiddleware(req,res,next){
    let token = req.cookies.token
    let decodedData = jwt.verify(token,JWT_DOCTOR_SECRET);
    if(decodedData){
        next()
    }
    else{
            res.status(401).send("Something went wrong")
    }
}
module.exports = {
    doctorMiddleware: doctorMiddleware
}