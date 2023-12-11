const express = require('express');
const router = express.Router();
const DataCtrl = require('../controllers/dataController');

// DataMigration Querys
router.get('/data', DataCtrl.lstData);
router.post('/data/guardar', DataCtrl.save);

module.exports = router;