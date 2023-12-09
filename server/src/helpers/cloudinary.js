const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handleUpload = async (file, publicId) =>{
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
        public_id: publicId
    });
    console.log(res)
    return res
}

module.exports = {
    handleUpload
}