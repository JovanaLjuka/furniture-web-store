const User = require('../models/user')
const { addCookiesToResponse, createTokenUser } = require('../utils')

// REGISTER

const register = async (req, res) => {
  const { email, username, password } = req.body

  const firstAdmin = (await User.countDocuments({})) === 0
  const role = firstAdmin ? 'admin' : 'user'

  const user = await User.create({ username, email, password, role })
  const tokenUser = createTokenUser(user)

  // when user register, token is created and sent as cookie with response

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
  // once user logs in, the server generate JWT containing information about user
  // (username,id,role)
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
