const checkPermissions = (requestUser, resourceUserId) => {
  if (!requestUser.hasOwnProperty('role')) {
    throw new Error('Missing property:role')
  }
  // if it is admin
  if (requestUser.role === 'admin') return

  // if that exact user makes request(id is object so we have to use method toString())
  if (requestUser.userId === resourceUserId.toString()) return
  throw new Error('Unauthorized access')
}

module.exports = checkPermissions
