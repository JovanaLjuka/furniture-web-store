const Product = require('../models/product')

// GET ALL PRODUCTS / SEARCH AND FILTER

const getAllProducts = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    sort,
    sort_dir,
    price,
    query,
    material,
    color,
  } = req.query

  const allProducts = await Product.find({})

  // send unique material values
  const materialsSet = new Set()
  allProducts.forEach((product) => {
    product.material.forEach((material) => {
      materialsSet.add(material)
    })
  })
  const uniqueMaterials = Array.from(materialsSet)

  try {
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

    const options = {
      sort: sortOptions,
      page,
      limit,
    }

    if (price) {
      const parsedPrice = parseInt(price)
      queryObject.price = { $gte: 0, $lte: parsedPrice }
      // const priceRange = price.split(',')
      // const prices = priceRange.map((strPrice) => parseInt(strPrice))
      // if (prices.length === 2) {
      //   queryObject.price = { $gte: prices[0], $lte: prices[1] }
      // } else {
      //   console.warn(
      //     'Invalid price format. Please provide price as comma-separated values (500,1000)'
      //   )
      // }
    }

    let products = await Product.paginate(queryObject, options)

    res.status(200).json({
      products: products.docs,
      totalProducts: products.totalDocs,
      totalPages: products.totalPages,
      currentPage: products.page,
      limit: products.limit,
      uniqueMaterials,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'error retrieving products' })
  }
}

// GET SINGLE PRODUCT

const getSingleProduct = async (req, res) => {
  const productTitle = req.params.title
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
