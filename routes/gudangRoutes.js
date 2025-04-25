const express = require('express');
const router = express.Router();
const gudangController = require('../controllers/gudangController'); // Mengimpor controller

/**
 * @swagger
 * tags:
 *   name: gudang
 *   description: API untuk manajemen Gudang
 */

/**
 * @swagger
 * /gudang:
 *   get:
 *     summary: Mengambil semua data Gudang
 *     tags: [gudang]
 *     responses:
 *       200:
 *         description: Daftar Gudang berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', gudangController.getAllGudang);

/**
 * @swagger
 * /gudang:
 *   post:
 *     summary: Tambah Gudang baru
 *     tags: [gudang]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - kode_gudang
 *               - nama_gudang
 *               - lokasi
 *             properties:
 *               kode_gudang:
 *                 type: string
 *               nama_gudang:
 *                 type: string
 *               lokasi:
 *                 type: string
 *               keterangan:
 *                 type: string
 *               created_by:
 *                 type: string
 *               updated_by:
 *                 type: string
 *     responses:
 *       201:
 *         description: Gudang berhasil dibuat
 */
router.post('/', gudangController.createGudang);

/**
 * @swagger
 * /gudang/{gudangId}:
 *   get:
 *     summary: Ambil detail Gudang berdasarkan ID
 *     tags: [gudang]
 *     parameters:
 *       - in: path
 *         name: gudangId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail Gudang ditemukan
 */
router.get('/:gudangId', gudangController.getGudangById);

/**
 * @swagger
 * /gudang/{gudangId}:
 *   put:
 *     summary: Perbarui Gudang berdasarkan ID
 *     tags: [gudang]
 *     parameters:
 *       - in: path
 *         name: gudangId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - kode_gudang
 *               - nama_gudang
 *               - lokasi
 *             properties:
 *               kode_gudang:
 *                 type: string
 *               nama_gudang:
 *                 type: string
 *               lokasi:
 *                 type: string
 *               keterangan:
 *                 type: string
 *               updated_by:
 *                 type: string
 *     responses:
 *       200:
 *         description: Gudang berhasil diperbarui
 */
router.put('/:gudangId', gudangController.updateGudang);

/**
 * @swagger
 * /gudang/{gudangId}:
 *   delete:
 *     summary: Hapus Gudang berdasarkan ID
 *     tags: [gudang]
 *     parameters:
 *       - in: path
 *         name: gudangId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gudang berhasil dihapus
 */
router.delete('/:gudangId', gudangController.deleteGudang);

module.exports = router;
