const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Mengimpor router
require('dotenv').config();

// Middleware untuk parsing JSON
app.use(express.json());

// Menyambungkan router ke aplikasi Express
app.use('/api/users', userRoutes); // Menggunakan userRoutes untuk API /api/users

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
