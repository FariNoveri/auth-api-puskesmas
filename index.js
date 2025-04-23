const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Mengimpor router
require('dotenv').config();
const obatRoutes = require('./routes/obatRoutes'); // Mengimpor router
const satuanObatRoutes = require('./routes/satuanObatRoutes');

// Middleware untuk parsing JSON
app.use(express.json());

// Menyambungkan router ke aplikasi Express
app.use('/api/users', userRoutes); // Menggunakan userRoutes untuk API /api/users
app.use('/api/obat', obatRoutes);
app.use('/api/satuan_obat', satuanObatRoutes);

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
