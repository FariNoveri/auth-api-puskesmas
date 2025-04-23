// controllers/userController.js
const userService = require('../core/services/userService');
const { successResponse, errorResponse } = require('../utils/responseFormat');
const bcrypt = require('bcrypt');  // Untuk hashing password

// Fungsi untuk mendapatkan semua users
const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    successResponse(res, 'Users fetched successfully', users);
  } catch (err) {
    console.error(err);  // Menambahkan log untuk error
    errorResponse(res, 'Error fetching users');
  }
};

// Fungsi untuk membuat user baru
const createUserController = async (req, res) => {
  const { name, username, email, password, unit_layanan_id, foto } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);  // Hash password sebelum menyimpannya
    const newUser = await userService.createUser({ name, username, email, password: hashedPassword, unit_layanan_id, foto });
    successResponse(res, 'User created successfully', newUser);
  } catch (err) {
    console.error(err);  // Menambahkan log untuk error
    errorResponse(res, 'Error creating user');
  }
};

// Fungsi untuk memperbarui user
const updateUserController = async (req, res) => {
  const userId = req.params.userId;
  const { name, username, email, password, unit_layanan_id, foto, remember_token } = req.body;
  try {
    const updatedUser = await userService.updateUser(userId, {
      name,
      username,
      email,
      password, // Pastikan password di-hash jika diubah
      unit_layanan_id,
      foto,
      remember_token,
    });
    successResponse(res, 'User updated successfully', updatedUser);
  } catch (err) {
    console.error(err);  // Menambahkan log untuk error
    errorResponse(res, 'Error updating user');
  }
};

// Fungsi untuk verifikasi email
const verifyEmailController = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await userService.verifyEmail(userId);
    successResponse(res, 'Email verified successfully', updatedUser);
  } catch (err) {
    console.error(err);  // Menambahkan log untuk error
    errorResponse(res, 'Error verifying email');
  }
};

// Fungsi untuk login dan menghasilkan remember token
const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return errorResponse(res, 'User not found');
    }

    // Bandingkan password yang diberikan dengan yang sudah di-hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return errorResponse(res, 'Invalid credentials');
    }

    const rememberToken = userService.generateRememberToken(user);
    await userService.updateRememberToken(user.id, rememberToken);

    successResponse(res, 'Login successful', { remember_token: rememberToken });
  } catch (err) {
    console.error(err);  // Menambahkan log untuk error
    errorResponse(res, 'Login failed');
  }
};

module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
  verifyEmailController,
  loginController,
};
