const User = require('../models/user')
const {
  createTokenUser,
  addCookiesToResponse,
  checkPermissions,
} = require('../utils')

const getAllUsers = async (req, res) => {
  console.log(req.user)
  const allUsers = await User.find({ role: 'user' }).select('-password')
  res.status(200).json({ allUsers })
}

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password')
  if (!user) {
    throw new Error(`No user with= id: ${req.params.id} found`)
  }
  checkPermissions(req.user, user._id)
  res.status(200).json({ user })
}

const showUser = async (req, res) => {
  res.status(200).json({ user: req.user })
}

const updateUser = async (req, res) => {
  const { email, username } = req.body
  if (!email || !username) {
    throw new Error('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  user.email = email
  user.username = username

  await user.save()

  const tokenUser = createTokenUser(user)
  addCookiesToResponse({ res, user: tokenUser })
  res.status(200).json({ user: tokenUser })
}

const updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  if (!oldPassword || !newPassword) {
    throw new Error('Please provide all values')
  }
  const user = await User.findOne({ _id: req.user.userId })

  const isPasswordcorrect = await user.comparePassword(oldPassword)
  if (!isPasswordcorrect) {
    throw new Error('Invalid credentials')
  }
  user.password = newPassword

  await user.save()
  res.status(200).json({ msg: 'Password updated' })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showUser,
  updatePassword,
  updateUser,
}
