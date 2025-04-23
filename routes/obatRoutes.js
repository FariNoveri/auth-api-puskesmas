const express = require('express');
const router = express.Router();
const obatController = require('../controllers/obatController');

router.get('/', obatController.getAllObat);
router.get('/:id', obatController.getObatById);
router.post('/', obatController.createObat);
router.put('/:id', obatController.updateObat);
router.delete('/:id', obatController.deleteObat);

module.exports = router;
