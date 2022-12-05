import express from "express";
import colors  from "colors";
import connectDB from "./config/db.js";
import products from "./routes/ProductRoute.js";
import cors from "cors"
const app= express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/products",products)

app.listen(5000,()=>
    console.log("server is running on port 5000".yellow.bold.underline)
    );