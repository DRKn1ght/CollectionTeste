import mongoose from 'mongoose'
// const bcrypt = require('bcryptjs');

const productSchema = mongoose.Schema({
    thumb: {
        type: Image,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    active: {
        type: String,
        required: true,
    },
    inactive_date: {
        type: Date,
        required: false,
    },
}, 
{
    timestamps: true,
}
);

const Product = mongoose.model("Product", productSchema);

export default Product;