const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = "uploads";
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir)
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, uploadDir)
    },
    filename: function(req,file,cb){
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null, uniqueName + path.extname(file.originalname)
        )
    }
})
const fileFilter = (req,file,cb)=>{
    if(file.minetype === "image/png" ||
        file.minetype === "image/jpeg" ||
        file.minetype === "image/jpg" ||
        file.minetype === "image/webp"
    ){
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"),false);
    }
}

const upload = multer({
    storage, 
    fileFilter,
    limits:{
        fileSize: 5 * 1024 * 1024,
    }
});
export default upload;