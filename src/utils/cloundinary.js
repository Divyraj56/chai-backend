import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs";

// Configuration
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the filr on the cloudinary
    const response =   await cloudinary.uploader.upload(localFilePath , {
            resource_type: "auto"
        })
        // file has been successfully uploaded
        console.log("file is uploaded on cloudinary" , response.url);
        return response;
    } catch (error) {
        
        fs.unlinkSync(localFilePath) // removes the locally stored temporary file as the upload failed
        return null;
    }
}

export { uploadOnCloudinary}