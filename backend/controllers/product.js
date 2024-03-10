// for routing
const getAllProducts = async (req, res) => {
  throw new Error('testing errors')
  res.status(200).json({ msg: 'products route' })
}

module.exports = getAllProducts
