const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Mengimpor router untuk user
const unitLayananRoutes = require("./routes/unitLayananRoutes"); // Mengimpor router untuk unit layanan
const gudangRoutes = require('./routes/gudangRoutes'); // Router untuk gudang
const obatRoutes = require('./routes/obatRoutes'); // Mengimpor router untuk obat
const satuanObatRoutes = require('./routes/satuanObatRoutes'); // Router satuan obat
require("dotenv").config(); // Memuat variabel lingkungan

// Middleware untuk parsing JSON
app.use(express.json());

// Menyambungkan router ke aplikasi Express
app.use("/api/users", userRoutes); // Menggunakan userRoutes untuk API /api/users
app.use("/api/unit-layanan", unitLayananRoutes); // Menggunakan unitLayananRoutes untuk API /api/unit-layanan
app.use("/api/gudang", gudangRoutes); // Menggunakan gudangRoutes untuk API /api/gudang
app.use('/api/obat', obatRoutes); // Menggunakan obatRoutes untuk API /api/obat
app.use('/api/satuan_obat', satuanObatRoutes); // Menggunakan satuanObatRoutes untuk API /api/satuan_obat

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
