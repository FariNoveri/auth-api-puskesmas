const express = require('express');
const router = express.Router();
const satuanObatController = require('../controllers/satuanObatController');

/**
 * @swagger
 * tags:
 *   name: Satuan Obat
 *   description: API untuk manajemen satuan obat
 */

/**
 * @swagger
 * /satuan-obat:
 *   get:
 *     summary: Mengambil semua data satuan obat
 *     tags: [Satuan Obat]
 *     responses:
 *       200:
 *         description: Daftar satuan obat berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nama_satuan:
 *                     type: string
 *                   keterangan:
 *                     type: string
 *                   created_by:
 *                     type: integer
 *                   updated_by:
 *                     type: integer
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 */
router.get('/', satuanObatController.getAllSatuanObat);

/**
 * @swagger
 * /satuan-obat/{id}:
 *   get:
 *     summary: Mengambil satu data satuan obat berdasarkan ID
 *     tags: [Satuan Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID satuan obat
 *     responses:
 *       200:
 *         description: Data satuan obat ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nama_satuan:
 *                   type: string
 *                 keterangan:
 *                   type: string
 *                 created_by:
 *                   type: integer
 *                 updated_by:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Satuan obat tidak ditemukan
 */
router.get('/:id', satuanObatController.getSatuanObatById);

/**
 * @swagger
 * /satuan-obat:
 *   post:
 *     summary: Menambahkan satuan obat baru
 *     tags: [Satuan Obat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_satuan:
 *                 type: string
 *                 description: Nama satuan obat
 *               keterangan:
 *                 type: string
 *                 description: Keterangan tambahan untuk satuan obat
 *               created_by:
 *                 type: integer
 *                 description: ID pengguna yang membuat data
 *             required:
 *               - nama_satuan
 *               - created_by
 *     responses:
 *       201:
 *         description: Satuan obat berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nama_satuan:
 *                       type: string
 *                     keterangan:
 *                       type: string
 *                     created_by:
 *                       type: integer
 *                     updated_by:
 *                       type: integer
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 */
router.post('/', satuanObatController.createSatuanObat);

/**
 * @swagger
 * /satuan-obat/{id}:
 *   put:
 *     summary: Mengupdate satuan obat berdasarkan ID
 *     tags: [Satuan Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID satuan obat yang akan diupdate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_satuan:
 *                 type: string
 *                 description: Nama satuan obat yang baru
 *               keterangan:
 *                 type: string
 *                 description: Keterangan tambahan untuk satuan obat
 *               updated_by:
 *                 type: integer
 *                 description: ID pengguna yang melakukan update
 *             required:
 *               - nama_satuan
 *               - updated_by
 *     responses:
 *       200:
 *         description: Satuan obat berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     nama_satuan:
 *                       type: string
 *                     keterangan:
 *                       type: string
 *                     created_by:
 *                       type: integer
 *                     updated_by:
 *                       type: integer
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Satuan obat tidak ditemukan
 */
router.put('/:id', satuanObatController.updateSatuanObat);

/**
 * @swagger
 * /satuan-obat/{id}:
 *   delete:
 *     summary: Menghapus satuan obat berdasarkan ID
 *     tags: [Satuan Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID satuan obat yang akan dihapus
 *     responses:
 *       200:
 *         description: Satuan obat berhasil dihapus
 *       404:           
 *         description: Satuan obat tidak ditemukan
 */
router.delete('/:id', satuanObatController.deleteSatuanObat);

module.exports = router;