import express from 'express'
import { addProduct, getProducts,getoneproduct,updateProduct,deleteProduct } from '../controllers/ProductControllers.js';
const router = express.Router();

router.post("/addproduct",addProduct)
router.get("/getproduct",getProducts)
router.get("/getproduct/:id",getoneproduct)
router.put("/updateproduct/:id",updateProduct)
router.delete("/deleteproduct/:id",deleteProduct)
export default router;