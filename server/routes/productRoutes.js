import express from 'express'
import {addProduct,getAllProduct,deleteAllProducts,getProduct} from  '../controllers/productController.js'
const productRouter=express.Router()

productRouter.post('/new',addProduct)
productRouter.get('/',getAllProduct)
productRouter.get('/:id',getProduct)
productRouter.delete('/',deleteAllProducts)
export default productRouter