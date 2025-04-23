const pool = require('../config/db');
const { successResponse, errorResponse } = require('../utils/responseFormat');

// GET semua data satuan obat
exports.getAllSatuanObat = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM m_satuan_obat');
    return successResponse(res, 'Data satuan obat berhasil diambil', result.rows);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal mengambil data satuan obat');
  }
};

// GET satuan obat berdasarkan ID
exports.getSatuanObatById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM m_satuan_obat WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return errorResponse(res, 'Satuan obat tidak ditemukan', null, 404);
    }
    return successResponse(res, 'Data satuan obat ditemukan', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal mengambil data satuan obat');
  }
};

// POST - tambah satuan obat
exports.createSatuanObat = async (req, res) => {
  const { nama_satuan, keterangan, created_by } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO m_satuan_obat (nama_satuan, keterangan, created_by, updated_by, created_at, updated_at)
       VALUES ($1, $2, $3, $3, NOW(), NOW()) RETURNING *`,
      [nama_satuan, keterangan, created_by]
    );
    return successResponse(res, 'Satuan obat berhasil ditambahkan', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal menambahkan satuan obat');
  }
};

// PUT - update satuan obat
exports.updateSatuanObat = async (req, res) => {
  const { id } = req.params;
  const { nama_satuan, keterangan, updated_by } = req.body;

  try {
    const result = await pool.query(
      `UPDATE m_satuan_obat SET nama_satuan = $1, keterangan = $2, updated_by = $3, updated_at = NOW()
       WHERE id = $4 RETURNING *`,
      [nama_satuan, keterangan, updated_by, id]
    );

    if (result.rows.length === 0) {
      return errorResponse(res, 'Satuan obat tidak ditemukan', null, 404);
    }

    return successResponse(res, 'Satuan obat berhasil diperbarui', result.rows[0]);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal memperbarui satuan obat');
  }
};

// DELETE - hapus satuan obat
exports.deleteSatuanObat = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM m_satuan_obat WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return errorResponse(res, 'Satuan obat tidak ditemukan', null, 404);
    }

    return successResponse(res, 'Satuan obat berhasil dihapus');
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal menghapus satuan obat');
  }
};
