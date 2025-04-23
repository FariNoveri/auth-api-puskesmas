const db = require('../../config/db'); // Mengimpor koneksi database

// Fungsi untuk mengambil semua data gudang
const getAllGudang = async () => {
    const query = `
      SELECT g.*, u.name AS created_by_name
      FROM m_gudang g
      LEFT JOIN users u ON g.created_by = u.id;
    `;
    const result = await db.query(query); // Gantilah dengan query yang sesuai jika menggunakan ORM
    return result.rows;
  };

// Fungsi untuk membuat gudang baru
const createGudang = async ({ kode_gudang, nama_gudang, lokasi, keterangan, created_by, updated_by, created_at, updated_at }) => {
  const result = await db.query(
    `INSERT INTO m_gudang (kode_gudang, nama_gudang, lokasi, keterangan, created_by, updated_by, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [kode_gudang, nama_gudang, lokasi, keterangan, created_by, updated_by, created_at, updated_at]
  );
  return result.rows[0];
};

module.exports = { getAllGudang, createGudang };
