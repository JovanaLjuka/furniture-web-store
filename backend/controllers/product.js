const Product = require('../models/product')

// for routing
const getAllProducts = async (req, res) => {
  const { type, company, color, material, name } = req.query
  const queryObject = {}

  // if we provide no value, we get back all values
  // the rest of the logic is based on certain queries
  if (name) {
    queryObject.name = name
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
    const products = await Product.find(queryObject)
    res.status(200).json({ products })
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

module.exports = getAllProducts
