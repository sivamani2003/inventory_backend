import express from 'express'
import { addProduct, getProducts,getoneproduct } from '../controllers/ProductControllers.js';
const router = express.Router();

router.post("/addproduct",addProduct)
router.get("/getproduct",getProducts)
router.get("/getproduct/:id",getoneproduct)
export default router;