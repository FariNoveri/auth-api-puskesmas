const obatModel = require('../models/obatModel');

const getAllObats = async () => {
  try {
    const obats = await obatModel.getAllObats();
    return obats;
  } catch (error) {
    throw new Error('Error fetching obats');
  }
};

const createObat = async (nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan) => {
  try {
    const newObat = await obatModel.createObat(nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan);
    return newObat;
  } catch (error) {
    throw new Error('Error creating obat');
  }
};

module.exports = { getAllObats, createObat };
