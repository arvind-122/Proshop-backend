import mongoose from "mongoose";

const connectDB=()=>{
    mongoose.connect("mongodb+srv://Arvindrawat:261098@cluster0.dtxqf7m.mongodb.net/Proshop?retryWrites=true&w=majority")
    .then(res=>console.log("connected to mongoDB".bgBlue))
}
export default connectDB;