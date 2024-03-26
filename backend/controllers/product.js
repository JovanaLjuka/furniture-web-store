const Product = require('../models/product')
const path = require('path')

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
}

// GET SINGLE PRODUCT

const getSingleProduct = async (req, res) => {
  const productTitle = req.params.title
  const product = await Product.findOne({ title: productTitle })

  if (!product) {
    throw new Error(`No product with name: ${productTitle} found`)
  }

  res.status(200).json({ product })
}

// CREATE PRODUCT

const createProduct = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Product.create(req.body)
  res.status(200).json(product)
}

// UPLOAD IMAGE

const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new Error('No file uploaded')
  }

  const productImage = req.files.image

  if (!productImage.mimetype.startsWith('image')) {
    throw new Error('Please provide image')
  }

  const maxSize = 1024 * 1024

  if (productImage.size > maxSize) {
    throw new Error('Your image is too big.')
  }

  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  )

  await productImage.mv(imagePath)
  res
    .status(200)
    .json({ image: `/uploads/${productImage.name} successfully uploaded` })
}

// UPDATE PRODUCT

const updateProduct = async (req, res) => {
  const { id: productId } = req.params
  const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
    new: true,
    runValidators: true,
  })

  if (!updateProduct) {
    throw new Error(`No product with id: ${productId} found`)
  }

  res.status(200).json({ updatedProduct })
}

// DELETE PRODUCT

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Product.findByIdAndDelete(productId)

  if (!product) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`)
  }
  res.status(200).json({ message: 'Product deleted' })
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  uploadImage,
  updateProduct,
  deleteProduct,
}
