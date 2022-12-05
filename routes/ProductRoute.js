import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/ProductController.js";

const routes = Router();
routes.route("/").get(getProducts).post(createProduct);
routes.route("/:_id").get(getProduct).put(updateProduct).delete(deleteProduct);

export default routes;