import express from 'express'
import { addProduct, fetchProduct } from "../controller/productController.js";

const router = express.Router();

router.route('/add').post(addProduct);
router.route('/').get(fetchProduct)

export default router;