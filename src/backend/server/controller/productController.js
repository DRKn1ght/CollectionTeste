import asyncHandler from 'express-async-handler';
import Product from '../../../model/product/index.js';

const fetchProduct = asyncHandler(async (req, res) => {
    const data = await Product.find({});
    res.send(data);
});

const addProduct = asyncHandler(async (req, res) => {
    const { thumb, description, brand, active, inactive_date } = req.body;

    const newProduct = await Product.create({
        thumb,
        description,
        brand,
        active,
        inactive_date,
    });

    if (newProduct) {
        res.status(201).json({
            _id: newProduct._id,
            thumb: newProduct.thumb,
            description: newProduct.description,
            brand: newProduct.brand,
            active: newProduct.active,
            inactive_date: newProduct.inactive_date,
        });
    } else {
        res.status(400);
        throw new Error('Algo deu errado :(');
    }
    res.json({
        thumb,
        description,
        brand,
        active,
        inactive_date,
    });
});

export { addProduct, fetchProduct };