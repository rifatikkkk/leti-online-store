import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// Create a New Order
export const newOrder = async (req, res) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        user,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice: itemsPrice + taxPrice + shippingPrice,
        paidAt: Date.now(),
        user: user,
    })
    
    orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity)
    })

    res.status(201).json({
        success: true,
        order,
    })
}

// Get My Order
export const getMyOrder = async (req, res) => {
    const orders = await Order.find({ user: req.params.user });

    res.status(200).json({
        success: true,
        orders,
    })

    return orders;
}

const updateStock = async (id, quantity) => {
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save();
}