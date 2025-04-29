// controllers/userController.js
const userService = require("../core/services/userService");
const { successResponse, errorResponse } = require("../utils/responseFormat");
const bcrypt = require("bcrypt");

// Fungsi untuk mendapatkan semua users
const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return successResponse(res, "Users fetched successfully", users);
  } catch (err) {
    console.error(err);
    return errorResponse(res, err.message || "Error fetching users");
  }
};

// Fungsi untuk membuat user baru
const createUserController = async (req, res) => {
  const { name, username, email, password, unit_layanan_id, foto } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.createUser({
      name,
      username,
      email,
      password: hashedPassword,
      unit_layanan_id,
      foto,
    });
    return successResponse(res, "User created successfully", newUser);
  } catch (err) {
    console.error(err);
    return errorResponse(res, err.message || "Error creating user");
  }
};

// Fungsi untuk memperbarui user
const updateUserController = async (req, res) => {
  const { userId } = req.params;
  const {
    name,
    username,
    email,
    password,
    unit_layanan_id,
    foto,
    remember_token,
  } = req.body;

  try {
    let hashedPassword = password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await userService.updateUser(userId, {
      name,
      username,
      email,
      password: hashedPassword,
      unit_layanan_id,
      foto,
      remember_token,
    });

    if (!updatedUser) {
      return errorResponse(res, "User not found or update failed");
    }

    return successResponse(res, "User updated successfully", updatedUser);
  } catch (err) {
    console.error(err);
    return errorResponse(res, err.message || "Error updating user");
  }
};

// Fungsi untuk verifikasi email
const verifyEmailController = async (req, res) => {
  const { userId } = req.params;
  try {
    const updatedUser = await userService.verifyEmail(userId);

    if (!updatedUser) {
      return errorResponse(res, "User not found or email verification failed");
    }

    return successResponse(res, "Email verified successfully", updatedUser);
  } catch (err) {
    console.error(err);
    return errorResponse(res, err.message || "Error verifying email");
  }
};

// Fungsi untuk login dan menghasilkan remember token
// Fungsi untuk login dan menghasilkan remember token
const loginController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userService.getUserByUsername(username);

    console.log(user);

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Invalid credentialhgjgjs",
        data: null,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        status: "error",
        message: "Invalid credentials jos",
        data: null,
      });
    }

    const rememberToken = userService.generateRememberToken(user);
    await userService.updateRememberToken(user.id, rememberToken);

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        remember_token: rememberToken,
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        },
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: null,
    });
  }
};


module.exports = {
  getAllUsersController,
  createUserController,
  updateUserController,
  verifyEmailController,
  loginController,
};
