import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Please Enter Product Name'], trim: true, },
        desc: { type: String, required: [true, 'Please Enter Product Description'], },
        price: { 
            type: Number,
            required: [true, 'Please Enter Product Price'],
            maxLength: [8, 'Price cannot exceed 8 characters'],
            default: 0,
        },
        images: [{
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },],
        category: { type: String, default: 'clothes', },
        stock: {
            type: String,
            required: [true, 'Please Enter Product Stock'],
            maxLength: [4, "Stock cannot exceed 4 characters"],
            default: 1,
        },
        createdAt: { type: Date, default: Date.now, },
    },
)

export default mongoose.model('Product', ProductSchema);