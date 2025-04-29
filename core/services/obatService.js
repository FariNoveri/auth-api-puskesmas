const db = require('../../config/db');  // Importing database connection

// Function to get all obat (medicines) with jenis obat (tablet, kapsul, etc.)
const getAllObats = async () => {
  const query = `
    SELECT o.*, o.jenis_obat  -- Fetching the jenis_obat directly from the obat table
    FROM m_obat o;
  `;
  const result = await db.query(query);  // Execute the query
  return result.rows;  // Return the rows from the query
};

// Function to create a new obat (medicine)
const createObat = async ({ nama_obat, jenis_obat, gudang_id, stok, tanggal_kadaluarsa, bpom, gambar_obat, keterangan }) => {
  const query = `
    INSERT INTO m_obat 
      (nama_obat, jenis_obat, gudang_id, stok, tanggal_kadaluarsa, bpom, gambar_obat, keterangan)
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;  
  
  const result = await db.query(query, [
    nama_obat, jenis_obat, gudang_id, stok, tanggal_kadaluarsa, 
    bpom, gambar_obat, keterangan
  ]);
  
  return result.rows[0];  // Return the newly created obat (medicine)
};

module.exports = { getAllObats, createObat };
