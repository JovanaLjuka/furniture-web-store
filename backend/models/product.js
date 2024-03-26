const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    default: '/uploads/sofa.png',
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
    enum: ['Kelly Wearstler', 'Molteni&C', 'Giorgetti'],
  },
  designer: {
    type: String,
    default: '',
  },
  designerBio: {
    type: String,
    default: '',
  },
  amount: {
    type: Number,
    default: 1,
  },
  quantity: {
    type: Number,
    default: 50,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
})

productSchema.plugin(mongoosePaginate)

const Product = mongoose.model('Product', productSchema)

module.exports = Product
