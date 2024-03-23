require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connect')
const productRouter = require('./routes/product')
const errorMiddleware = require('./middleware/error-middleware')
const notFoundMiddleware = require('./middleware/not-found-middleware')
const path = require('path')

const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/product')

const app = express()
const port = process.env.PORT || 5002

app.use(express.json())
app.use(cors())

// middleware
app.use('/', productRouter)
app.use(errorMiddleware)
app.use(notFoundMiddleware)

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: false }))

// // route handlers
// app.get('/', (req, res) => {
//   res.send('<h1>Store API</h1><a href="/products">products route</a>')
// })

// route for getting all products
// app.get('/products', productRouter)

// // route for getting a single product
// app.get('/products/:name', getSingleProduct)

// // route for searching products by query
// app.get('/products/search/:query', searchProducts)

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
