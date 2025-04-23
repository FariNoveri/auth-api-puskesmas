// routes/satuanObatRoutes.js
const express = require('express');
const router = express.Router();
const satuanObatController = require('../controllers/satuanObatController');

router.get('/', satuanObatController.getAllSatuanObat);
router.get('/:id', satuanObatController.getSatuanObatById);
router.post('/', satuanObatController.createSatuanObat);
router.put('/:id', satuanObatController.updateSatuanObat);
router.delete('/:id', satuanObatController.deleteSatuanObat);

module.exports = router;
