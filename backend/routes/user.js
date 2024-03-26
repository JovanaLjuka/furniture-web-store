// const express = require('express')
// const userRouter = express.Router()

// const {
//   getAllUsers,
//   getSingleUser,
//   showUser,
//   updatePassword,
//   updateUser,
// } = require('../controllers/user')

// const {
//   authenticateUser,
//   authorizePermissions,
// } = require('../middleware/authenticate')

// // base route - http://localhost:5002/users

// userRouter.get(
//   '/allusers',
//   authenticateUser,
//   authorizePermissions('admin'),
//   getAllUsers
// )

// userRouter.get('/showUser', authenticateUser, showUser)

// userRouter.patch('/updateUser', authenticateUser, updateUser)

// userRouter.patch('/updatePassword', authenticateUser, updatePassword)

// userRouter.get('/:id', authenticateUser, getSingleUser)

// module.exports = userRouter
