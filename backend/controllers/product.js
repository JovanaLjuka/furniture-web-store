const { request } = require('express')
const Product = require('../models/product')

// for routing

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Product.findById({ _id: productId })
  res.status(200).json({ product })
}

const getAllProducts = async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 3
  const skip = (page - 1) * limit
  const products = await Product.find().limit(limit).skip(skip).exec()
  const count = await Product.countDocuments()

  // materials unique values

  const materialsSet = new Set()
  products.forEach((product) => {
    product.material.forEach((material) => {
      materialsSet.add(material)
    })
  })
  const materials = Array.from(materialsSet)

  res.status(200).json({
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    totalProducts: count,
    materials,
  })
}

const searchProducts = async (req, res) => {
  const { sort, price, query, material } = req.query

  try {
    let result = Product.find({
      $or: [
        { name: { $regex: new RegExp(query, 'i') } },
        { company: { $regex: new RegExp(query, 'i') } },
        { type: { $regex: new RegExp(query, 'i') } },
      ],
    })
    if (material) {
      // material query
      // at least one match for multiple values --> $in operator
      if (material && Array.isArray(material)) {
        result = result.find({ $in: material })
      } else {
        result = result.find({ material })
      }
    }
    if (sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
    }
    if (price) {
      if (price === '0,500') {
        result = result.find({ price: { $gte: 0, $lte: 500 } })
      }
      if (price === '500,1000') {
        result = result.find({ price: { $gte: 500, $lte: 1000 } })
      }
    }

    const products = await result
    const materialsSet = new Set()
    products.forEach((product) => {
      product.material.forEach((material) => {
        materialsSet.add(material)
      })
    })
    const materials = Array.from(materialsSet)

    res.status(200).json({
      products,
      materials,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.status(200).json(product)
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndUpdate(id, req.body)
  const updatedProduct = await Product.findById(id)
  res.status(200).json(updatedProduct)
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  const product = await Product.findByIdAndDelete(id)
  res.status(200).json({ message: 'Product deleted' })
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
