import Product from '../models/productModel.js';


// Create a new Product
export const createProduct = async (req, res) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product,
    })
}

// Get all Products
export const getAllProducts = (req, res) => {
    res.status(200).json({ message: "Route is working fine" })
}