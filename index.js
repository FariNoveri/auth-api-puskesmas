const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Router untuk users
const gudangRoutes = require('./routes/gudangRoutes'); // Router untuk gudang
require('dotenv').config();

// Middleware untuk parsing JSON
app.use(express.json());

// Routing
app.use('/api/users', userRoutes);   // GET/POST ke /api/users
app.use('/api/gudang', gudangRoutes); // GET/POST ke /api/gudang

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
