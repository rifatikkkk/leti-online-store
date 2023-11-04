import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// Create a New Order
export const newOrder = async (req, res, next) => {
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

    res.status(201).json({
        success: true,
        order,
    })
}