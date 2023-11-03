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
export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    })
}

// Get Product Details
export const getProductDetails = async (req, res) => {

    const id = req.params.id;

    if (id.length != 24) {
        return res.status(500).json({
            success: false,
            message: "Product does not exist",
        })
    }

    const product = await Product.findById(id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found",
        })
    }

    res.status(200).json({
        success: true,
        product,
    })
}