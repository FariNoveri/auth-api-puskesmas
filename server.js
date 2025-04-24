const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // File Swagger konfigurasi
const userRoutes = require("./routes/userRoutes"); // Route pengguna
const unitLayananRoutes = require("./routes/unitLayananRoutes"); // Route unit layanan

// Middleware parsing JSON
app.use(express.json());

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Routes
app.use("/users", userRoutes);
app.use("/unit-layanan", unitLayananRoutes); // Tambahkan ini agar swagger bisa baca route unit layanan juga

// Cek server hidup
app.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

// Jalankan server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
  console.log("Swagger docs at http://localhost:3001/api-docs");
});
