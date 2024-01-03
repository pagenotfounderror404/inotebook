import jwt from 'jsonwebtoken'
export const fetchuser = (req, res, next) => {
  const token = req.header('auth-token')
  if (!token) {
    res.status(401).json({
      error: 'Please Login',
    })
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.id = data.id
  } catch (error) {
    res.status(401).json({
      error: error.message,
    })
  }
  next()
}
