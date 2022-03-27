import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    thumb: {
        type: String,
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
        type: Boolean,
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

const Product = mongoose.model("Produtos", productSchema);

export default Product;