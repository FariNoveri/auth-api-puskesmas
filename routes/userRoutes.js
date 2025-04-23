// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route untuk mendapatkan semua users
router.get('/', userController.getAllUsersController);

// Route untuk membuat user baru
router.post('/', userController.createUserController);

// Route untuk memperbarui user
router.put('/:userId', userController.updateUserController);

// Route untuk verifikasi email
router.patch('/verify-email/:userId', userController.verifyEmailController);

// Route untuk login dan generate remember token
router.post('/login', userController.loginController);

module.exports = router;
