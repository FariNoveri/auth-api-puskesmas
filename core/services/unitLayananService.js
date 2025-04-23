// services/unitLayananService.js
const db = require("../../config/db");

// Fungsi untuk mendapatkan semua unit layanan
const getAllUnitLayanan = async () => {
  try {
    const result = await db.query("SELECT * FROM m_unit_layanan");
    return result.rows;
  } catch (err) {
    throw new Error("Error fetching unit layanan");
  }
};

// Fungsi untuk mendapatkan satu unit layanan berdasarkan ID
const getUnitLayananById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM m_unit_layanan WHERE id = $1", [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error("Error fetching unit layanan by ID");
  }
};

// Fungsi untuk membuat unit layanan baru
const createUnitLayanan = async (data) => {
  try {
    const { unit_layanan, keterangan } = data;
    const result = await db.query(
      `INSERT INTO m_unit_layanan (unit_layanan, keterangan, created_at, updated_at)
       VALUES ($1, $2, NOW(), NOW()) RETURNING *`,
      [unit_layanan, keterangan]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Error creating unit layanan");
  }
};

// Fungsi untuk memperbarui unit layanan
const updateUnitLayanan = async (id, data) => {
  try {
    const { unit_layanan, keterangan } = data;
    const result = await db.query(
      `UPDATE m_unit_layanan 
       SET unit_layanan = $1, keterangan = $2, updated_at = NOW()
       WHERE id = $3 RETURNING *`,
      [unit_layanan, keterangan, id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error("Error updating unit layanan");
  }
};

// Fungsi untuk menghapus unit layanan
const deleteUnitLayanan = async (id) => {
  try {
    const result = await db.query("DELETE FROM m_unit_layanan WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
  } catch (err) {
    throw new Error("Error deleting unit layanan");
  }
};

module.exports = {
  getAllUnitLayanan,
  getUnitLayananById,
  createUnitLayanan,
  updateUnitLayanan,
  deleteUnitLayanan,
};
