const Product = require('../models/product')

// for routing

const getAllProducts = async (req, res) => {
  const { sort, sort_dir, price, query, material, color } = req.query
  const queryObject = {}

  if (query) {
    queryObject.$or = [
      { title: { $regex: new RegExp(query, 'i') } },
      { company: { $regex: new RegExp(query, 'i') } },
      { type: { $regex: new RegExp(query, 'i') } },
    ]
  }
  if (color) {
    queryObject.color = color
  }

  if (material) {
    queryObject.material = material
  }

  const sortOptions = {}
  if (sort) {
    sortOptions[sort] = parseInt(sort_dir) || 1
  }
  let result = await Product.find(queryObject).sort(sortOptions)
  if (price) {
    if (price === '0,500') {
      result = result.filter(
        (product) => product.price >= 0 && product.price <= 500
      )
    }
    if (price === '500,1000') {
      result = result.filter(
        (product) => product.price >= 500 && product.price <= 1000
      )
    }
  }

  console.log('sort_dir:', req.query.sort_dir)
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
    totalProducts: products.length,
    materials,
  })
}

const getSingleProduct = async (req, res) => {
  console.log(req.params)
  const productTitle = req.params.title
  console.log(productTitle)
  const product = await Product.findOne({ title: productTitle })
  res.status(200).json({ product })
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
  createProduct,
  updateProduct,
  deleteProduct,
}
