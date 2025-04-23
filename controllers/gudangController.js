const { successResponse, errorResponse } = require('../utils/responseFormat');
const gudangService = require('../core/services/gudangService');

// Fungsi untuk mengambil semua gudang
const getAllGudang = async (req, res) => {
  try {
    const gudangs = await gudangService.getAllGudang(); // Memanggil service untuk ambil data
    if (gudangs.length > 0) {
      return successResponse(res, 'Gudang retrieved successfully', gudangs);
    } else {
      return successResponse(res, 'No gudang found', []);
    }
  } catch (err) {
    console.error('Error fetching gudang:', err);
    return errorResponse(res, 'Database error', null);
  }
};

// Fungsi untuk menambahkan gudang
const createGudang = async (req, res) => {
  const { kode_gudang, nama_gudang, lokasi, keterangan, created_by, updated_by } = req.body;
  const created_at = new Date();  // Menetapkan created_at secara otomatis
  const updated_at = new Date();  // Menetapkan updated_at secara otomatis

  try {
    // Validasi input
    if (!kode_gudang || !nama_gudang || !lokasi) {
      return errorResponse(res, 'Missing required fields', null);
    }

    const newGudang = await gudangService.createGudang({
      kode_gudang,
      nama_gudang,
      lokasi,
      keterangan,
      created_by,
      updated_by,
      created_at,
      updated_at,
    });
    return successResponse(res, 'Gudang created successfully', newGudang);
  } catch (err) {
    console.error('Error creating gudang:', err);
    return errorResponse(res, 'Database error', null);
  }
};

module.exports = {
  getAllGudang,
  createGudang,
};
