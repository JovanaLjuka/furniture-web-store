const checkPermissions = (requestUser, resourceUserId) => {
  if (!requestUser.hasOwnProperty('role')) {
    throw new Error('Missing property:role')
  }
  if (requestUser.role === 'admin') return
  if (requestUser.userId === resourceUserId.toString()) return
  throw new Error('Unauthorized access')
}

module.exports = checkPermissions
