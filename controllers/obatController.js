const pool = require('../config/db');
const { successResponse, errorResponse } = require('../utils/responseFormat');

/**
 * @swagger
 * tags:
 *   name: Obat
 *   description: API untuk manajemen Obat
 */

/**
 * @swagger
 * /obat:
 *   get:
 *     summary: Mengambil semua data obat
 *     tags: [Obat]
 *     responses:
 *       200:
 *         description: Data obat berhasil diambil
 */
exports.getAllObat = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM m_obat');
    return successResponse(res, 'Data obat berhasil diambil', result.rows);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Gagal mengambil data obat');
  }
};

/**
 * @swagger
 * /obat/{id}:
 *   get:
 *     summary: Mengambil detail obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID obat
 *     responses:
 *       200:
 *         description: Data obat ditemukan
 *       404:
 *         description: Obat tidak ditemukan
 */
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

/**
 * @swagger
 * /obat:
 *   post:
 *     summary: Menambahkan obat baru
 *     tags: [Obat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ObatInput'
 *     responses:
 *       201:
 *         description: Obat berhasil ditambahkan
 */
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

/**
 * @swagger
 * /obat/{id}:
 *   put:
 *     summary: Memperbarui data obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ObatInput'
 *     responses:
 *       200:
 *         description: Obat berhasil diperbarui
 *       404:
 *         description: Obat tidak ditemukan
 */
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

/**
 * @swagger
 * /obat/{id}:
 *   delete:
 *     summary: Menghapus data obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Obat berhasil dihapus
 *       404:
 *         description: Obat tidak ditemukan
 */
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

/**
 * @swagger
 * components:
 *   schemas:
 *     ObatInput:
 *       type: object
 *       required:
 *         - nama_obat
 *         - satuan_id
 *         - created_by
 *       properties:
 *         nama_obat:
 *           type: string
 *           example: Paracetamol
 *         satuan_id:
 *           type: integer
 *           example: 1
 *         keterangan:
 *           type: string
 *           example: Obat untuk menurunkan demam
 *         created_by:
 *           type: string
 *           example: admin
 *         updated_by:
 *           type: string
 *           example: admin
 */
