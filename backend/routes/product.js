const express = require('express')
const productRouter = express.Router()

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authenticate')

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  uploadImage,
  updateProduct,
  deleteProduct,
} = require('../controllers/product')

// routes

// base route - http://localhost:5002/

productRouter.get('/all', getAllProducts)

productRouter.get('/single/:title', getSingleProduct)

productRouter.post(
  '/',
  [authenticateUser, authorizePermissions('admin')],
  createProduct
)
productRouter.post(
  '/uploadImage',
  [authenticateUser, authorizePermissions('admin')],
  uploadImage
)

productRouter.put(
  '/:id',
  [authenticateUser, authorizePermissions('admin')],
  updateProduct
)

productRouter.delete(
  '/:id',
  [authenticateUser, authorizePermissions('admin')],
  deleteProduct
)

module.exports = productRouter
