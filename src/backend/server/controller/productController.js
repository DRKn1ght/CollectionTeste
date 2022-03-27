import asyncHandler from 'express-async-handler';
import Product from '../../../model/product/index.js';

const fetchProduct = asyncHandler(async (req, res) => {
    const data = await Product.find({active: true});
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
});

const editProduct = asyncHandler(async (req, res) => {
    const { _id, thumb, description, brand, active, inactive_date } = req.body;

    await Product.findByIdAndUpdate({ _id }, {
        thumb: thumb,
        description: description,
        brand: brand,
        active: active,
        inactive_date: inactive_date,
    }, (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result) {
            res.status(201).json({
                _id,
                thumb,
                description,
                brand,
                active,
                inactive_date,
            })
        }
    }).clone().catch(function(err){ console.log(err)})
});

const setInactiveProduct = asyncHandler(async (req, res) => {
    const { _id } = req.body
    const actualDate = Date();
    await Product.findByIdAndUpdate({ _id }, {
        active: false,
        inactive_date: actualDate,

    }, (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result) {
            res.status(201).json({
                _id,
            })
        }
    }).clone().catch(function(err){ console.log(err)})
});
export { addProduct, fetchProduct, editProduct, setInactiveProduct };