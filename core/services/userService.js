const db = require('../../config/db'); // Mengimpor koneksi database

// Fungsi untuk mengambil semua users dari database
const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows; // Mengembalikan hasil query
};

// Fungsi untuk membuat user baru di database
const createUser = async ({ nama_lengkap, username, email, password, role_id, unit_layanan_id, photo }) => {
  const result = await db.query(
    'INSERT INTO users (nama_lengkap, username, email, password, role_id, unit_layanan_id, photo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [nama_lengkap, username, email, password, role_id, unit_layanan_id, photo]
  );
  return result.rows[0]; // Mengembalikan user yang baru dibuat
};

module.exports = { getAllUsers, createUser };
