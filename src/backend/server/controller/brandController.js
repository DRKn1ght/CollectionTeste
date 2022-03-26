import asyncHandler from 'express-async-handler';
import Brand from '../../../model/brand/index.js';

const fetchBrand = asyncHandler(async (req, res) => {
    const data = await Brand.find({}, '-_id');
    res.send(data);
})

export { fetchBrand };