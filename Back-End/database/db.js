import mongoose from "mongoose";

async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/blog")
    console.log("Database connected successfully");
}

export default connectDB