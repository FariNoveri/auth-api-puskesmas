require('dotenv').config(); 
const express = require("express");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Swagger config

const userRoutes = require("./routes/userRoutes"); // Route pengguna
const unitLayananRoutes = require("./routes/unitLayananRoutes"); // Route unit layanan
const satuanObatRoutes = require("./routes/satuanObatRoutes"); // Route satuan obat
const gudangRoutes = require("./routes/gudangRoutes"); // Route gudang
const obatRoutes = require("./routes/obatRoutes"); // ✅ Route obat
const orderRoutes = require("./routes/orderRoutes");

// Middleware parsing JSON
app.use(express.json());

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use("/users", userRoutes);
app.use("/unit-layanan", unitLayananRoutes);
app.use("/satuan-obat", satuanObatRoutes);
app.use("/gudang", gudangRoutes);
app.use("/obat", obatRoutes); // ✅ Tambah route Obat
app.use("/orders", orderRoutes);

// Cek server hidup
app.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

// Jalankan server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
  console.log("Swagger docs at http://localhost:3001/api-docs");
});
