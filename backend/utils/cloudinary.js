import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

// Return "https" URLs by setting secure: true
cloudinary.config({
  cloud_name: process.env.CLODINARYCLODNAME,
  api_key: process.env.CLOUDINARYAPIKEYS,
  api_secret: process.env.CLOUDINARYSECRETKEYS
});

export async function uploadToCloudinary(file, folder ='doctor'){
    try{
        const result = await cloudinary.uploader.upload(file,
            {
                folder: folder,
                resource_type:"image"
            }
        );
        fs.unlinkSync(filePath)
        return result;
        
    }catch(e){
        console.error("Error in Cloudinary Upload",e)
        throw err
    }
}
export async function deleteFromCloudinary(publicId){
    try{
        if(!publicId){
            return null;
        }
        const result = await cloudinary.uploader.destroy(publicId)
        return result;
    }catch(e){
        console.error("Error in Cloudinary Delete",e)
        throw err
    }
}
export default cloudinary;