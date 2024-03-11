const Product = require('../models/product')

// for routing
const getAllProducts = async (req, res) => {
  const { type, company, color, material, name, sort, fields, priceFilter } =
    req.query
  const queryObject = {}

  // if we provide no value, we get back all values
  // the rest of the logic is based on certain queries
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }
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
    // // precise matching for all values --> $all operator
    // if (material && Array.isArray(material)) {
    //   queryObject.material = { $all: material }
    //   // single value matching
  }

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

module.exports = getAllProducts
