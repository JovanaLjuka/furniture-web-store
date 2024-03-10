require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/product')
const errorMiddleware = require('./middleware/error-middleware')
const notFoundMiddleware = require('./middleware/not-found-middleware')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({ origin: process.env.MONGO_URI }))

// route handlers

app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/products">products route</a>')
})

// middleware
app.use('/products', productsRouter)
app.use(errorMiddleware)
app.use(notFoundMiddleware)

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
