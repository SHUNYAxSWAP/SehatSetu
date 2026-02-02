const jwt = require("jsonwebtoken");
const JWT_CLIENT_SECRET = process.env.JWT_CLIENT_SECRET;

function userMiddleware(req,res,next){
    let token = req.cookies.token
    let decodedData = jwt.verify(token,JWT_CLIENT_SECRET);
    if(decodedData){
        next()
    }
    else{
            res.status(401).send("Something went wrong")
    }
}
module.exports = {
    userMiddleware: userMiddleware
}