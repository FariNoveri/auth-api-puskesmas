// routes/unitLayananRoutes.js
const express = require("express");
const router = express.Router();
const unitLayananController = require("../controllers/unitLayananController");

// Route untuk mendapatkan semua unit layanan
router.get("/", unitLayananController.getAllUnitLayananController);

// Route untuk membuat unit layanan baru
router.post("/", unitLayananController.createUnitLayananController);

// Route untuk memperbarui unit layanan berdasarkan ID
router.put("/:unitLayananId", unitLayananController.updateUnitLayananController);

// Route untuk menghapus unit layanan berdasarkan ID
router.delete("/:unitLayananId", unitLayananController.deleteUnitLayananController);

// Optional: Route untuk mendapatkan satu unit layanan berdasarkan ID
router.get("/:unitLayananId", unitLayananController.getUnitLayananByIdController);

module.exports = router;
