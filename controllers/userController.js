// controllers/userController.js
const userService = require('../core/services/userService');
const { successResponse, errorResponse } = require('../utils/responseFormat');
const bcrypt = require('bcrypt');  // Untuk hashing password
const jwt = require('jsonwebtoken');
const { generateAccessToken, generateRefreshToken } = require('../core/services/userService');

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

const createUserController = async (req, res) => {
  const { name, username, email, password, unit_layanan_id, foto } = req.body;

  try {

    const newUser = await userService.createUser({
      name,
      username,
      email,
      password, // ✅ Sekarang tidak error
      unit_layanan_id,
      foto
    });

    successResponse(res, 'User created successfully', newUser);
  } catch (err) {
    console.error('Create user error:', err); // 👈 Tambahkan log error yang detail
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
    console.log('Verifying refresh token:', refreshToken);
  }
};

// Fungsi login menggunakan userService
const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userService.getUserByUsername(username);
    if (!user) return errorResponse(res, 'User not found');

    if (password !== user.password) {
      return errorResponse(res, 'Invalid credentials');
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const updatedUser = await userService.updateRememberToken(user.id, refreshToken);

    successResponse(res, 'Login successful', {
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  } catch (err) {
    console.error(err);
    errorResponse(res, 'Login failed');
  }
};

// Fungsi logout
const logoutController = async (req, res) => {
  const { userId } = req.body;

  try {
    await userService.updateRememberToken(userId, null); // null untuk logout
    successResponse(res, 'Logout successful');
  } catch (err) {
    console.error(err);
    errorResponse(res, 'Logout failed');
  }
};

const resetPasswordController = async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    const user = await userService.getUserByUsername(username);
    if (!user) return errorResponse(res, 'User not found');

    await userService.updatePassword(user.id, newPassword);

    successResponse(res, 'Password reset successfully');
  } catch (err) {
    console.error(err);
    errorResponse(res, 'Password reset failed');
  }
};

const refreshTokenController = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken || typeof refreshToken !== 'string') {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }

  try {
    console.log('Received refresh token:', refreshToken);  // Log token for debugging
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);  // Check for expired/invalid token
    const user = await userService.getUserById(decoded.id); // Get user based on ID in token

    if (!user || user.remember_token !== refreshToken) {
      return errorResponse(res, 'Invalid refresh token');
    }

    const newAccessToken = jwt.sign(
      { id: user.id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET,  // Make sure the correct secret is used here
      { expiresIn: '15m' }
    );

    successResponse(res, 'Access token refreshed', { access_token: newAccessToken });
  } catch (err) {
    console.error('Error during token verification:', err.message);  // More detailed logging
    if (err.name === 'TokenExpiredError') {
      return errorResponse(res, 'Refresh token expired');
    }
    if (err.name === 'JsonWebTokenError') {
      return errorResponse(res, 'Refresh token malformed');
    }
    errorResponse(res, 'Failed to refresh token');
  }
};

// Fungsi untuk mendapatkan profil pengguna
const profileController = async (req, res) => {
  const userId = req.user.id;  // Pastikan ada ID pengguna yang terverifikasi dari token
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return errorResponse(res, 'User not found');
    }
    successResponse(res, 'Profile fetched successfully', user);
  } catch (err) {
    console.error(err);
    errorResponse(res, 'Error fetching profile');
  }
};



module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
  verifyEmailController,
  loginController,
  profileController,
  logoutController,
  resetPasswordController,
  refreshTokenController,
};
