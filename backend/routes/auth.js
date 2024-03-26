const express = require('express')
const authRouter = express.Router()

const { register, login, logout } = require('../controllers/auth')

// base route - http://localhost:5002/auth

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/logout', logout)

module.exports = authRouter
