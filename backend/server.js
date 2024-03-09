require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./db/connect')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({ origin: process.env.MONGO_URI }))

// routes

app.get('/', (req, res) => {
  res.send('Hello world')
})

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
