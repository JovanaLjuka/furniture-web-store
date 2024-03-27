const User = require('../models/user')
const { addCookiesToResponse, createTokenUser } = require('../utils')
const bcrypt = require('bcryptjs')

// REGISTER

const register = async (req, res) => {
  const { email, username, password } = req.body

  const firstAdmin = (await User.countDocuments({})) === 0
  const role = firstAdmin ? 'admin' : 'user'

  const user = await User.create({ username, email, password, role })
  const tokenUser = createTokenUser(user)

  addCookiesToResponse({ res, user: tokenUser })

  res.status(201).json({ user: tokenUser })
}

// LOGIN

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new Error('Please provide email and password')
  }
  const user = await User.findOne({ email })

  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new Error('Invalid credentials')
  }
  const tokenUser = createTokenUser(user)
  addCookiesToResponse({ res, user: tokenUser })

  res.status(200).json({ user: tokenUser })
}

// LOGOUT

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(200).json({ msg: 'user logged out' })
}

module.exports = { register, login, logout }
