const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];  // Ambil token dari header Authorization
  if (!token) return res.status(403).json({ message: 'Access denied, token missing' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;  // Menambahkan informasi user ke request
    next();
  });
};

module.exports = authenticateToken;
