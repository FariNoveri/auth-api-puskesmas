const db = require("../../config/db");

// Fungsi untuk mendapatkan semua unit layanan
const getAllUnitLayanan = async () => {
  try {
    const result = await db.query("SELECT * FROM m_unit_layanan");
    return result.rows;
  } catch (err) {
    console.error(err); // Menambah logging error untuk debugging
    throw new Error(`Error fetching unit layanan: ${err.message}`);
  }
};

// Fungsi untuk mendapatkan satu unit layanan berdasarkan ID
const getUnitLayananById = async (id) => {
  try {
    const result = await db.query("SELECT * FROM m_unit_layanan WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      throw new Error(`Unit layanan with ID ${id} not found`);
    }
    return result.rows[0];
  } catch (err) {
    console.error(err); // Menambah logging error untuk debugging
    throw new Error(`Error fetching unit layanan by ID: ${err.message}`);
  }
};

// Fungsi untuk membuat unit layanan baru
const createUnitLayanan = async (data) => {
  const { unit_layanan, keterangan } = data;
  try {
    const result = await db.query(
      `INSERT INTO m_unit_layanan (unit_layanan, keterangan, created_at, updated_at)
       VALUES ($1, $2, NOW(), NOW()) RETURNING *`,
      [unit_layanan, keterangan]
    );
    return result.rows[0];
  } catch (err) {
    console.error(err); // Menambah logging error untuk debugging
    throw new Error(`Error creating unit layanan: ${err.message}`);
  }
};

// Fungsi untuk memperbarui unit layanan
const updateUnitLayanan = async (id, data) => {
  const { unit_layanan, keterangan } = data;
  try {
    const result = await db.query(
      `UPDATE m_unit_layanan 
       SET unit_layanan = $1, keterangan = $2, updated_at = NOW()
       WHERE id = $3 RETURNING *`,
      [unit_layanan, keterangan, id]
    );
    if (result.rows.length === 0) {
      throw new Error(`Unit layanan with ID ${id} not found`);
    }
    return result.rows[0];
  } catch (err) {
    console.error(err); // Menambah logging error untuk debugging
    throw new Error(`Error updating unit layanan: ${err.message}`);
  }
};

// Fungsi untuk menghapus unit layanan
const deleteUnitLayanan = async (id) => {
  try {
    const result = await db.query("DELETE FROM m_unit_layanan WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return null; // Tidak ada data yang dihapus
    }
    return result.rows[0]; // Mengembalikan data yang dihapus
  } catch (err) {
    console.error(err); // Menambah logging error untuk debugging
    throw new Error(`Error deleting unit layanan: ${err.message}`);
  }
};

module.exports = {
  getAllUnitLayanan,
  getUnitLayananById,
  createUnitLayanan,
  updateUnitLayanan,
  deleteUnitLayanan,
};
