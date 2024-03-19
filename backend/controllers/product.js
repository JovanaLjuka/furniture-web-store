const Product = require('../models/product')

// for routing

const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json({ products })
}

const searchProducts = async (req, res) => {
  const { type, company, color, material, name, sort, fields, priceFilter } =
    req.query
  const queryObject = {}

  if (type) {
    queryObject.type = type
  }
  if (company) {
    queryObject.company = company
  }
  if (color) {
    queryObject.color = color
  }
  if (material) {
    // material query
    // at least one match for multiple values --> $in operator
    if (material && Array.isArray(material)) {
      queryObject.material = { $in: material }
    } else {
      queryObject.material = material
    }
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }

  // // precise matching for all values --> $all operator
  // if (material && Array.isArray(material)) {
  //   queryObject.material = { $all: material }
  //   // single value matching

  try {
    let result = Product.find(queryObject)

    if (sort) {
      const sortList = sort.split(',').join(' ')
      result = result.sort(sortList)
    }
    if (fields) {
      const fieldList = fields.split(',').join(' ')
      result = result.select(fieldList)
    }

    // pagination logic --> we provide default values if the values are not provided in the query string
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 3
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    // price filter

    if (priceFilter) {
      if (priceFilter === '0,500') {
        result = result.find({ price: { $gte: 0, $lte: 500 } })
      }
      if (priceFilter === '500,1000') {
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
  createProduct,
  updateProduct,
  deleteProduct,
}
