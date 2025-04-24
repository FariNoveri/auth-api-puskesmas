const express = require("express");
const router = express.Router();
const unitLayananController = require("../controllers/unitLayananController");

/**
 * @swagger
 * tags:
 *   name: UnitLayanan
 *   description: API untuk mengelola data unit layanan di puskesmas
 */

/**
 * @swagger
 * /unit-layanan:
 *   get:
 *     summary: Ambil semua unit layanan
 *     tags: [UnitLayanan]
 *     responses:
 *       200:
 *         description: Daftar unit layanan berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       unit_layanan:
 *                         type: string
 *                       keterangan:
 *                         type: string
 */
router.get("/", unitLayananController.getAllUnitLayananController);

/**
 * @swagger
 * /unit-layanan:
 *   post:
 *     summary: Tambah unit layanan baru
 *     tags: [UnitLayanan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - unit_layanan
 *               - keterangan
 *             properties:
 *               unit_layanan:
 *                 type: string
 *               keterangan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Unit layanan berhasil dibuat
 */
router.post("/", unitLayananController.createUnitLayananController);

/**
 * @swagger
 * /unit-layanan/{unitLayananId}:
 *   get:
 *     summary: Ambil detail unit layanan berdasarkan ID
 *     tags: [UnitLayanan]
 *     parameters:
 *       - in: path
 *         name: unitLayananId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detail unit layanan ditemukan
 */
router.get("/:unitLayananId", unitLayananController.getUnitLayananByIdController);

/**
 * @swagger
 * /unit-layanan/{unitLayananId}:
 *   put:
 *     summary: Perbarui unit layanan berdasarkan ID
 *     tags: [UnitLayanan]
 *     parameters:
 *       - in: path
 *         name: unitLayananId
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
 *               - unit_layanan
 *               - keterangan
 *             properties:
 *               unit_layanan:
 *                 type: string
 *               keterangan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Unit layanan berhasil diperbarui
 */
router.put("/:unitLayananId", unitLayananController.updateUnitLayananController);

/**
 * @swagger
 * /unit-layanan/{unitLayananId}:
 *   delete:
 *     summary: Hapus unit layanan berdasarkan ID
 *     tags: [UnitLayanan]
 *     parameters:
 *       - in: path
 *         name: unitLayananId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Unit layanan berhasil dihapus
 */
router.delete("/:unitLayananId", unitLayananController.deleteUnitLayananController);

// ⬇️ WAJIB ADA
module.exports = router;
