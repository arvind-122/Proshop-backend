import express from "express";
import colors  from "colors";
import connectDB from "./config/db.js";
import products from "./routes/ProductRoute.js";
import cors from "cors"
import users from "./routes/UserRoute.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import carts from "./routes/cartRoute.js";
import orders from "./routes/orderRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app= express();
app.use(express.json());
app.use(cors());
connectDB();
app.use("/api/products",products);
app.use("/api/user",users);
app.use("/api/cart",carts)

app.use("/api/orders", orders);
app.use(notFound)
app.use(errorHandler);
let Port=process.env.PORT || 5000
app.listen(Port,
    console.log(`server is running on port ${Port}`.yellow.bold.underline)
    );