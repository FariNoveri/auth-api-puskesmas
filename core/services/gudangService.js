const db = require('../../config/db'); // Mengimpor koneksi database

// Fungsi untuk mengambil semua data gudang
const getAllGudang = async () => {
  const query = `
    SELECT g.*, u.name AS created_by_name
    FROM m_gudang g
    LEFT JOIN users u ON g.created_by = u.id;
  `;
  const result = await db.query(query);
  return result.rows;
};

// Fungsi untuk mengambil gudang berdasarkan ID
const getGudangById = async (gudangId) => {
  const result = await db.query(
    `SELECT * FROM m_gudang WHERE id = $1`,
    [gudangId]
  );
  return result.rows[0];
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

// Fungsi untuk memperbarui data gudang
const updateGudang = async (gudangId, { kode_gudang, nama_gudang, lokasi, keterangan, updated_by, updated_at }) => {
  const result = await db.query(
    `UPDATE m_gudang
     SET kode_gudang = $1,
         nama_gudang = $2,
         lokasi = $3,
         keterangan = $4,
         updated_by = $5,
         updated_at = $6
     WHERE id = $7
     RETURNING *`,
    [kode_gudang, nama_gudang, lokasi, keterangan, updated_by, updated_at, gudangId]
  );
  return result.rows[0];
};

// Fungsi untuk menghapus gudang
const deleteGudang = async (gudangId) => {
  const result = await db.query(
    `DELETE FROM m_gudang WHERE id = $1`,
    [gudangId]
  );
  return result.rowCount > 0;
};

module.exports = {
  getAllGudang,
  getGudangById,
  createGudang,
  updateGudang,
  deleteGudang,
};
