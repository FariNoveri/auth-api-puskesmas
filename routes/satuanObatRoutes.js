// routes/satuanObatRoutes.js
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
 *                   nama:
 *                     type: string
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
 *     responses:
 *       200:
 *         description: Data berhasil ditemukan
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
 *               nama:
 *                 type: string
 *     responses:
 *       201:
 *         description: Data berhasil ditambahkan
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data berhasil diupdate
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
 *     responses:
 *       200:
 *         description: Data berhasil dihapus
 */
router.delete('/:id', satuanObatController.deleteSatuanObat);

module.exports = router;
