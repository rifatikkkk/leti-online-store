import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

const router = new Router();


// Create a new Product
// http://localhost:3001/api/product/new
router.post('/new', createProduct);

// Get All Products
// http://localhost:3001/api/product
router.get('/', getAllProducts);


export default router;