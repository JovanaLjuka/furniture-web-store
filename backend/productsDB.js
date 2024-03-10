require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.create(jsonProducts)
    console.log('successful connection')
    process.exit(0) //successful connection --> exit the node proccess
  } catch (error) {
    console.log(error)
    process.exit(1) // connection failed --> exit the node process
  }
}

start()
