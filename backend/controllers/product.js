const Product = require('../models/product')

// for routing
const getAllProducts = async (req, res) => {
  const { type, company, color, material } = req.query
  const queryObject = {}

  // if we provide no value, we get back all values
  // the rest of the logic is based on certain queries
  if (type) {
    queryObject.type = type
  }
  if (company) {
    queryObject.company = company
  }
  if (color) {
    queryObject.color = color
  }

  // material query
  // if we provide more values $in operator
  if (material && Array.isArray(material)) {
    queryObject.material = { $in: material }
  }
  // $all operator matches arrays that contain all elements from the query
  else if (material && Array.isArray(material)) {
    queryObject.material = { $all: material }
  } else {
    queryObject.material = material
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
