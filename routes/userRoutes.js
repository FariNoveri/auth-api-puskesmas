const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Mengimpor controller

// Route untuk mengambil semua users
router.get('/', userController.getAllUsers);

// Route untuk menambahkan user
router.post('/', userController.createUser);

module.exports = router;
