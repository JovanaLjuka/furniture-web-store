const jwt = require('jsonwebtoken')
require('dotenv').config()

const createJWT = ({ payload }) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    })
    return token
  } catch (error) {
    console.error('Error creating JWT:', error.message)
    throw new Error('Error creating JWT')
  }
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const addCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // set up secure: true, once production is finished, which marks the cookie to be used with HTTPS only
    secure: process.env.NODE_ENV === 'production',
    // secure: false,
    signed: true,
  })
}

module.exports = {
  createJWT,
  isTokenValid,
  addCookiesToResponse,
}
