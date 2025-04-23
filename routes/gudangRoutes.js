const express = require('express');
const router = express.Router();
const gudangController = require('../controllers/gudangController'); // Mengimpor controller

// Route untuk mengambil semua gudang
router.get('/', gudangController.getAllGudang);

// Route untuk menambahkan gudang
router.post('/', gudangController.createGudang);

module.exports = router;
