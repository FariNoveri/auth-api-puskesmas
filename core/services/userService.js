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
        l.unit_layanan AS unit_layanan_id,
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
    console.error('Error fetching all users:', err);
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
    console.error('Error fetching user by username:', err);
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
    console.error('DB Error:', err); // Menambahkan log untuk debugging
    throw new Error('Error creating user');
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
    console.error('Error updating user:', err);
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
    console.error('Error verifying email:', err);
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
    console.log('Updating remember_token for ID:', userId, 'with token:', token);
    return result.rows[0];
  } catch (err) {
    console.error('Error updating remember token:', err);
    throw new Error('Error updating remember token');
  }
};

// Fungsi untuk menghasilkan remember token
const generateRememberToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username }, // Payload
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' } // Refresh token berlaku 7 hari
  );
};

// Fungsi untuk menghasilkan access token
const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.ACCESS_TOKEN_SECRET,  // Mengambil nilai dari .env
    { expiresIn: '15m' }  // Access token berlaku 15 menit
  );
};

// Fungsi untuk menghasilkan refresh token
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    process.env.REFRESH_TOKEN_SECRET,  // Mengambil nilai dari .env
    { expiresIn: '7d' }  // Refresh token berlaku 7 hari
  );
};

// Fungsi untuk memperbarui password
const updatePassword = async (userId, newPassword) => {
  try {
    const result = await db.query(
      `UPDATE users SET password = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [newPassword, userId]
    );
    return result.rows[0];
  } catch (err) {
    console.error('Error updating password:', err);
    throw new Error('Error updating password');
  }
};

// Fungsi untuk mendapatkan user berdasarkan ID
const getUserById = async (id) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0]; // Mengembalikan data user berdasarkan ID
  } catch (err) {
    console.error('Error fetching user by ID:', err);
    throw new Error('Error fetching user by ID');
  }
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
  getUserById,
  updateUser,
  verifyEmail,
  updateRememberToken,
  generateRememberToken,
  generateAccessToken,
  generateRefreshToken,
  updatePassword,
};
