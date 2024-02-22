const express = require('express')
const { getProducts, postProduct, patchProduct, deleteProduct } = require('../controller/products.controller')

const router = express.Router()

router.get('/products', getProducts)
router.post('/products', postProduct)
router.patch('/products/:productId', patchProduct)
router.delete('/products/:productId', deleteProduct)

module.exports = router