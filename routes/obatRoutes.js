const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');

/**
 * @swagger
 * tags:
 *   name: Obat
 *   description: API Manajemen data obat
 */

/**
 * @swagger
 * /obat:
 *   get:
 *     summary: Mengambil semua data Obat
 *     tags: [Obat]
 *     responses:
 *       200:
 *         description: Berhasil mengambil data obat
 */
router.get('/', obatController.getAllObat);

/**
 * @swagger
 * /obat/{id}:
 *   get:
 *     summary: Mengambil detail Obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Obat
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Berhasil mengambil data obat
 *       404:
 *         description: Obat tidak ditemukan
 */
router.get('/:id', obatController.getObatById);

/**
 * @swagger
 * /obat:
 *   post:
 *     summary: Menambahkan Obat baru
 *     tags: [Obat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               stok:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Obat berhasil ditambahkan
 */
router.post('/', obatController.createObat);

/**
 * @swagger
 * /obat/{id}:
 *   put:
 *     summary: Memperbarui Obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Obat
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               stok:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Data obat berhasil diperbarui
 *       404:
 *         description: Obat tidak ditemukan
 */
router.put('/:id', obatController.updateObat);

/**
 * @swagger
 * /obat/{id}:
 *   delete:
 *     summary: Menghapus Obat berdasarkan ID
 *     tags: [Obat]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID Obat
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Obat berhasil dihapus
 *       404:
 *         description: Obat tidak ditemukan
 */
router.delete('/:id', obatController.deleteObat);

module.exports = router;
