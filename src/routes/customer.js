const express = require('express');
const router = express.Router();
const customerController =  require('../controllers/customerContoller');

router.get('/', customerController.list);

module.exports = router;