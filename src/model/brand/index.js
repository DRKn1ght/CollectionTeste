import mongoose from 'mongoose'

const brandSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
})

const Brand = mongoose.model("Marcas", brandSchema);

export default Brand;