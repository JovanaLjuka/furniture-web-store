const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  material: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    enum: ['Kelly Wearstler', 'Molteni&C'],
  },
  designer: {
    type: String,
    default: '',
  },
  designerBio: {
    type: String,
    default: '',
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
