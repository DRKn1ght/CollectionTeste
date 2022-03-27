import express from 'express'
import { addProduct, fetchProduct, editProduct, setInactiveProduct } from "../controller/productController.js";

const router = express.Router();

router.route('/setInactive').post(setInactiveProduct);
router.route('/edit').post(editProduct);
router.route('/add').post(addProduct);
router.route('/').get(fetchProduct)

export default router;