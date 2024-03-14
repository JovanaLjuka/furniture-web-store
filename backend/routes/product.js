const express = require('express')
const productRouter = express.Router()

const {
  getAllProducts,
  getSingleProduct,
  searchProducts,
} = require('../controllers/product')

// routes

productRouter.get('/', getAllProducts)
// http://localhost:5002/products/

productRouter.get('/singleProduct/:name', getSingleProduct)
// http://localhost:5002/products/singleProduct/Wish

productRouter.get('/search', searchProducts)
// http://localhost:5002/products/search?name=ai

/*
URL examples

1. Search products with material query(multiple values)
http://localhost:5002/products/search?type=coffee%20table&material=glass&material=steel ----> %20 is space encoded

2. Sorting
http://localhost:5002/products/search?type=chair&sort=price,-name ----> 

3. Pagination
http://localhost:5002/products/search?type=chair&page=2

4. Price filtering
http://localhost:5002/products/search?priceFilter=0,500
*/

module.exports = productRouter