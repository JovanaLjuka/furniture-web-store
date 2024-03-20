const Product = require('../models/product')

// for routing

const getAllProducts = async (req, res) => {
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 3
  const skip = (page - 1) * limit
  const products = await Product.find().limit(limit).skip(skip).exec()
  const count = await Product.countDocuments()
  res.status(200).json({
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    totalProducts: count,
  })
}

const searchProducts = async (req, res) => {
  const { sort, price, query } = req.query

  try {
    let result = Product.find({
      $or: [
        { name: { $regex: new RegExp(query, 'i') } },
        { company: { $regex: new RegExp(query, 'i') } },
        { type: { $regex: new RegExp(query, 'i') } },
      ],
    })

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
    res.status(200).json({ products })
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const filterProducts = async (req, res) => {
  const { color, material, sort, price } = req.query
  const queryObject = {}
  console.log(req.query)
  console.log(req.params)
  if (color) {
    queryObject.color = color
  }

  if (material) {
    if (material && Array.isArray(material)) {
      queryObject.material = { $in: material }
    } else {
      queryObject.material = material
    }
  }

  try {
    let result = Product.find(queryObject)

    if (sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
    }

    // price filter

    if (price) {
      if (price === '0,500') {
        result = result.find({ price: { $gte: 0, $lte: 500 } })
      }
      if (price === '500,1000') {
        result = result.find({ price: { $gte: 500, $lte: 1000 } })
      }
    }

    // pagination logic --> we provide default values if the values are not provided in the query string
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 3
    const skip = (page - 1) * limit

    const products = await result.limit(limit).skip(skip).exec()
    const count = await result.countDocuments()
    res.status(200).json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getSingleProduct = async (req, res) => {
  console.log(req.params)
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })
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
  searchProducts,
  filterProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
