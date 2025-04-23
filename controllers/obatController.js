const pool = require('../config/db');
const { successResponse, errorResponse } = require('../utils/responseFormat'); // asumsi file ini di folder utils

// GET semua data obat
exports.getAllObat = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM m_obat');
    return successResponse(res, 'Data obat berhasil diambil', result.rows);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal mengambil data obat');
  }
};

// GET obat berdasarkan ID
exports.getObatById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM m_obat WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return errorResponse(res, 'Obat tidak ditemukan', null, 404);
    }
    return successResponse(res, 'Data obat ditemukan', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal mengambil data obat');
  }
};

// POST - tambah obat
exports.createObat = async (req, res) => {
  const { nama_obat, satuan_id, keterangan, created_by } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO m_obat (nama_obat, satuan_id, keterangan, created_by, updated_by, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $4, NOW(), NOW()) RETURNING *`,
      [nama_obat, satuan_id, keterangan, created_by]
    );
    return successResponse(res, 'Obat berhasil ditambahkan', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal menambahkan obat');
  }
};

// PUT - update obat
exports.updateObat = async (req, res) => {
  const { id } = req.params;
  const { nama_obat, satuan_id, keterangan, updated_by } = req.body;

  try {
    const result = await pool.query(
      `UPDATE m_obat SET nama_obat = $1, satuan_id = $2, keterangan = $3, updated_by = $4, updated_at = NOW()
       WHERE id = $5 RETURNING *`,
      [nama_obat, satuan_id, keterangan, updated_by, id]
    );

    if (result.rows.length === 0) {
      return errorResponse(res, 'Obat tidak ditemukan', null, 404);
    }

    return successResponse(res, 'Obat berhasil diperbarui', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal memperbarui obat');
  }
};

// DELETE - hapus obat
exports.deleteObat = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM m_obat WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return errorResponse(res, 'Obat tidak ditemukan', null, 404);
    }

    return successResponse(res, 'Obat berhasil dihapus');
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal menghapus obat');
  }
};
