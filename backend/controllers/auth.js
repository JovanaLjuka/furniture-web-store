const User = require('../models/user')
const { addCookiesToResponse } = require('../utils')

const register = async (req, res) => {
  const { email, username, password } = req.body

  const firstAdmin = (await User.countDocuments({})) === 0
  const role = firstAdmin ? 'admin' : 'user'

  const user = await User.create({ username, email, password, role })
  const tokenUser = {
    username: user.username,
    userId: user._id,
    role: user.role,
  }

  addCookiesToResponse({ res, user: tokenUser })

  console.log(req.signedCookies)

  res.status(201).json({ user: tokenUser })
}

const login = async (req, res) => {
  res.send('login user')
}

const logout = async (req, res) => {
  res.send('logout user')
}

module.exports = { register, login, logout }
