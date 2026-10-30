import express from "express"
import Post from "./models/user.model.js"
import upload from "./middleware/upload.js";
import uploadToCloudinary from "./utils/uploadToCloudinary.js";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.get("/post",async(req,res)=>{
    const posts = await Post.find();
    res.send(posts);
})

app.post("/post",upload.single("image"),async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({
                message: "Image is required"
            })
        }
        const result = await uploadToCloudinary(req.file.buffer);
        const cap = req.body.caption;

        await Post.insertOne({
            image:result.secure_url,
            caption:cap,
        })

        res.status(200).json({
            message:"file uploaded successfully",
            imageUrl: result.secure_url,
            publicId: result.public_id,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"Image upload failed",
        })
    }
})


export default app;