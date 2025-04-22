const { successResponse, errorResponse } = require('../utils/responseFormat');
const userService = require('../core/services/userService');

// Fungsi untuk mengambil semua users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers(); // Memanggil service untuk mendapatkan data users
    successResponse(res, 'Users retrieved successfully', users); // Menggunakan successResponse
  } catch (err) {
    console.error('Error fetching users:', err);
    errorResponse(res, 'Database error', null); // Menggunakan errorResponse
  }
};

// Fungsi untuk menambahkan user
const createUser = async (req, res) => {
  const { nama_lengkap, username, email, password, role_id, unit_layanan_id, photo } = req.body;
  try {
    const newUser = await userService.createUser({ nama_lengkap, username, email, password, role_id, unit_layanan_id, photo });
    successResponse(res, 'User created successfully', newUser); // Menggunakan successResponse
  } catch (err) {
    console.error('Error creating user:', err);
    errorResponse(res, 'Database error', null); // Menggunakan errorResponse
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
