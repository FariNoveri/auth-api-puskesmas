const pool = require('../config/db');

// Get semua satuan obat
const getAllSatuanObat = async () => {
  const result = await pool.query('SELECT * FROM m_satuan_obat');
  return result.rows;
};

// Get satuan obat by ID
const getSatuanObatById = async (id) => {
  const result = await pool.query('SELECT * FROM m_satuan_obat WHERE id = $1', [id]);
  return result.rows[0];
};

// Create satuan obat
const createSatuanObat = async ({ nama_satuan, keterangan, created_by }) => {
  const result = await pool.query(
    `INSERT INTO m_satuan_obat 
    (nama_satuan, keterangan, created_by, updated_by, created_at, updated_at) 
    VALUES ($1, $2, $3, $3, NOW(), NOW()) RETURNING *`,
    [nama_satuan, keterangan, created_by]
  );
  return result.rows[0];
};

// Update satuan obat
const updateSatuanObat = async (id, { nama_satuan, keterangan, updated_by }) => {
  const result = await pool.query(
    `UPDATE m_satuan_obat 
     SET nama_satuan = $1, keterangan = $2, updated_by = $3, updated_at = NOW() 
     WHERE id = $4 RETURNING *`,
    [nama_satuan, keterangan, updated_by, id]
  );
  return result.rows[0];
};

// Delete satuan obat
const deleteSatuanObat = async (id) => {
  const result = await pool.query('DELETE FROM m_satuan_obat WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  getAllSatuanObat,
  getSatuanObatById,
  createSatuanObat,
  updateSatuanObat,
  deleteSatuanObat,
};
