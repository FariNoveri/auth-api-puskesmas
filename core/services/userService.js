// services/userService.js
const db = require('../../config/db');
const jwt = require('jsonwebtoken'); // Ini perlu di-import

// Fungsi untuk mendapatkan semua user
const getAllUsers = async () => {
  try {
    const result = await db.query(`
      SELECT 
        u.id,
        u.name, 
        u.username,
        u.email,
        u.email_verified_at,
        u.password,
        l.unit_layanan AS unit_layanan_id, -- Ambil nama layanan, tapi alias tetap unit_layanan_id
        u.foto,
        u.remember_token,
        u.created_at,
        u.updated_at
      FROM 
        users u
      JOIN 
        m_unit_layanan l
      ON 
        u.unit_layanan_id = l.id
    `);
    return result.rows;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk mendapatkan user berdasarkan username
const getUserByUsername = async (username) => {
  try {
    const result = await db.query(
      'SELECT * FROM users WHERE username = $1', 
      [username]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk membuat user baru
const createUser = async (userData) => {
  try {
    const { name, username, email, password, unit_layanan_id, foto } = userData;

    const result = await db.query(
      `INSERT INTO users (name, username, email, password, unit_layanan_id, foto, created_at, updated_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *`,
      [name, username, email, password, unit_layanan_id, foto]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk memperbarui user berdasarkan ID
const updateUser = async (userId, userData) => {
  try {
    const { name, username, email, password, unit_layanan_id, foto, remember_token } = userData;

    const result = await db.query(
      `UPDATE users SET 
         name = $1, 
         username = $2, 
         email = $3, 
         password = $4, 
         unit_layanan_id = $5, 
         foto = $6, 
         remember_token = $7, 
         updated_at = NOW() 
       WHERE id = $8 RETURNING *`,
      [name, username, email, password, unit_layanan_id, foto, remember_token, userId]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk verifikasi email
const verifyEmail = async (userId) => {
  try {
    const result = await db.query(
      'UPDATE users SET email_verified_at = NOW() WHERE id = $1 RETURNING *',
      [userId]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk memperbarui remember token
const updateRememberToken = async (userId, token) => {
  try {
    const result = await db.query(
      'UPDATE users SET remember_token = $1 WHERE id = $2 RETURNING *',
      [token, userId]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Fungsi untuk menghasilkan remember token
// Fungsi untuk menghasilkan remember token
const generateRememberToken = (user) => {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role || 'user', // Default ke 'user' kalau role belum ada
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};


module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
  updateUser,
  verifyEmail,
  updateRememberToken,
  generateRememberToken,
};
