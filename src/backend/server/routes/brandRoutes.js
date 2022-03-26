import express from 'express'
import { fetchBrand } from "../controller/brandController.js";

const router = express.Router();

router.route('/').get(fetchBrand);

export default router;