const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token
  if (!token) {
    throw new Error('Authentication failed')
  }

  try {
    const { username, userId, role } = isTokenValid({ token })
    req.user = { username, userId, role }
    next()
  } catch (error) {
    throw new Error('Token invalid')
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new Error('Unathorized access')
    }
    next()
  }
}

module.exports = {
  authenticateUser,
  authorizePermissions,
}
