import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv .config();

const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(res=>console.log("connected to mongoDB".bgBlue))
}
export default connectDB;