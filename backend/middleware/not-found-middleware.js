const notFoundMiddleware = async (err, req, res, next) => {
  res.status(404).json({ msg: 'not found-error' })
}
