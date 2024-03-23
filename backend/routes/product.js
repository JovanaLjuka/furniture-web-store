const express = require('express')
const productRouter = express.Router()

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product')

// routes

// base route - http://localhost:5002/

productRouter.get('/all', getAllProducts)
productRouter.get('/single/:title', getSingleProduct)
//

// productRouter.get('/:query', searchProducts)

// http://localhost:5002/products/search?name=ai

// Filter by material --> http://localhost:5002/api/products/search?material=stone
// Filter by price --> http://localhost:5002/api/products/search?price=0,500

// Search query --> http://localhost:5002/api/products/search?query=chair
// we can search by name, company and type

// Sort by price --> http://localhost:5002/api/products/search?sort=price
// http://localhost:5002/api/products/search?sort=-price, name

// Params: sort, price, query, material

// http://localhost:5002/products/singleProduct/Wish

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

productRouter.post('/', createProduct)

productRouter.put('/:id', updateProduct)

productRouter.delete('/:id', deleteProduct)

module.exports = productRouter
