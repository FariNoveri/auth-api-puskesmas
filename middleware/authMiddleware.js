const jwt = require('jsonwebtoken');

// Middleware untuk memeriksa token JWT
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'No token, authorization denied'
    });
  }

  try {
    // Verifikasi token menggunakan secret key
    const decoded = jwt.verify(token, 'secretkey'); // Ganti dengan secret key yang kamu gunakan
    req.user = decoded; // Menyimpan data user yang sudah terdekripsi
    next(); // Lanjut ke route berikutnya
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Token is not valid'
    });
  }
};

module.exports = authMiddleware;
