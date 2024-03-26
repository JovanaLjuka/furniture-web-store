const createTokenUser = (user) => {
  return { username: user.username, useId: user._id, role: user.role }
}

module.exports = createTokenUser
