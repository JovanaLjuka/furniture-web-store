require('dotenv').config()

// require package, for using error handler middlewares
require('express-async-errors')

const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connect')
const productRouter = require('./routes/product')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const errorMiddleware = require('./middleware/error-middleware')
const notFoundMiddleware = require('./middleware/not-found-middleware')
const path = require('path')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 5002

// middleware

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.JWT_SECRET))

// base routes

app.use('/', productRouter)
app.use('/auth', authRouter)
app.use('/users', userRouter)

// app.get('/testingroute', (req, res) => {
//   console.log(req.signedCookies)
//   res.send('testing')
// })

// Error handling middlewares
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
