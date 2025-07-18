import { v2 as cloudinary } from 'cloudinary';
import { error } from 'console';
import dotenv from "dotenv";
import fs from "fs"
(async function() {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: ProcessingInstruction.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


const uploadOnCloud = async (localFilePath)=>{
try{
    if(!localFilePath){
        return null
    }
    const response = cloudinary.uploader.upload(localFilePath,{ resource_type:"auto"
    });
    console.log('file upload successfully')
    return response;
}
catch{
fs.unlinkSync(localFilePath);
console.log(error)
}
}




    console.log(response);

    // // Optimize delivery by resizing and applying auto-format and auto-quality
    // const optimizeUrl = cloudinary.url('shoes', {
    //     fetch_format: 'auto',
    //     quality: 'auto'
    // });

    // console.log(optimizeUrl);

    // // Transform the image: auto-crop to square aspect_ratio
    // const autoCropUrl = cloudinary.url('shoes', {
    //     crop: 'auto',
    //     gravity: 'auto',
    //     width: 500,
    //     height: 500,
    // });

    // console.log(autoCropUrl);
})();