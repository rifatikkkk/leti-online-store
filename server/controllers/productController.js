import Product from '../models/productModel.js';

import ApiFeatures from '../utils/apifeatures.js';


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

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()

    const products = await apiFeature.query;
    // const products = await Product.find();
    const countProducts = products.length;
    
    res.status(200).json({
        success: true,
        products,
        countProducts,
    })
}

// Get Product Details
export const getProductDetails = async (req, res) => {

    const id = req.params.id;
    // const id = req.body.id

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