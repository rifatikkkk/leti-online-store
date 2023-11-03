import { Router } from "express";
import { createProduct, getAllProducts, getProductDetails } from "../controllers/productController.js";

const router = new Router();


// Create a new Product
// http://localhost:3001/api/product/new
router.post('/new', createProduct);

// Get All Products
// http://localhost:3001/api/product
router.get('/', getAllProducts);

// Get Product Details
// http://localhost:3001/api/product/:id
router.get('/:id', getProductDetails);



export default router;