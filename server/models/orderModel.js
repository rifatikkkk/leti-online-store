import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        shippingInfo: {
            address: {
                type: String,
                required: true,
            },
            pinCode: {
                type: Number,
                required: true,
            },
            phone: {
                type: Number,
                required: true,
            },
        },
        orderItems: [
            {
                name: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                product: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product",
                    required: true,
                },
            },
        ],
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        paymentInfo: {
            id: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                required: true,
            },
        },
        paidAt: {
            type: Date,
            required: true,
        },
        itemsPrice: {
            type: Number,
            required: true,
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        orderStatus: {
            type: String,
            required: true,
            default: "Proccessing",
        },
        deliveredAt: Date,
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
)

export default mongoose.model('Order', OrderSchema);