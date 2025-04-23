// controllers/unitLayananController.js
const unitLayananService = require("../core/services/unitLayananService");
const { successResponse, errorResponse } = require("../utils/responseFormat");

// Mendapatkan semua unit layanan
const getAllUnitLayananController = async (req, res) => {
  try {
    const data = await unitLayananService.getAllUnitLayanan();
    successResponse(res, "Unit layanan fetched successfully", data);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Error fetching unit layanan");
  }
};

// Mendapatkan satu unit layanan berdasarkan ID
const getUnitLayananByIdController = async (req, res) => {
  const { unitLayananId } = req.params;
  try {
    const data = await unitLayananService.getUnitLayananById(unitLayananId);
    if (!data) {
      return errorResponse(res, "Unit layanan not found", 404);
    }
    successResponse(res, "Unit layanan fetched successfully", data);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Error fetching unit layanan by ID");
  }
};

// Membuat unit layanan baru
const createUnitLayananController = async (req, res) => {
  const { unit_layanan, keterangan } = req.body;
  try {
    const newData = await unitLayananService.createUnitLayanan({ unit_layanan, keterangan });
    successResponse(res, "Unit layanan created successfully", newData);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Error creating unit layanan");
  }
};

// Memperbarui unit layanan
const updateUnitLayananController = async (req, res) => {
  const { unitLayananId } = req.params;
  const { unit_layanan, keterangan } = req.body;
  try {
    const updated = await unitLayananService.updateUnitLayanan(unitLayananId, { unit_layanan, keterangan });
    successResponse(res, "Unit layanan updated successfully", updated);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Error updating unit layanan");
  }
};

// Menghapus unit layanan
const deleteUnitLayananController = async (req, res) => {
  const { unitLayananId } = req.params;
  try {
    const deleted = await unitLayananService.deleteUnitLayanan(unitLayananId);
    if (!deleted) {
      return errorResponse(res, "Unit layanan not found or already deleted", 404);
    }
    successResponse(res, "Unit layanan deleted successfully", deleted);
  } catch (err) {
    console.error(err);
    errorResponse(res, "Error deleting unit layanan");
  }
};

module.exports = {
  getAllUnitLayananController,
  getUnitLayananByIdController,
  createUnitLayananController,
  updateUnitLayananController,
  deleteUnitLayananController,
};
