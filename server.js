const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import swaggerSpec dari swagger.js
const userRoutes = require('./routes/userRoutes'); // Pastikan file routes/userRoutes.js diimpor
const unitLayananRoutes = require("./routes/unitLayananRoutes"); // Mengimpor router untuk unit layanan
const gudangRoutes = require('./routes/gudangRoutes'); // Router untuk gudang
const obatRoutes = require('./routes/obatRoutes'); // Mengimpor router untuk obat
const satuanObatRoutes = require('./routes/satuanObatRoutes'); // Router satuan obat
require('dotenv').config();


// Middleware untuk JSON
app.use(express.json());

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Gunakan route untuk users
app.use('/users', userRoutes);  // Pastikan /users di-routing dengan userRoutes
app.use("/api/unit-layanan", unitLayananRoutes); // Menggunakan unitLayananRoutes untuk API /api/unit-layanan
app.use("/api/gudang", gudangRoutes); // Menggunakan gudangRoutes untuk API /api/gudang
app.use('/api/obat', obatRoutes); // Menggunakan obatRoutes untuk API /api/obat
app.use('/api/satuan_obat', satuanObatRoutes); // Menggunakan satuanObatRoutes untuk API /api/satuan_obat


// Routes
app.use('/users', userRoutes); // API users

// Routes lain
app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
  console.log('Swagger docs at http://localhost:3001/api-docs');
});
