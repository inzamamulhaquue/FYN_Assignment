const express = require('express');
const router = express.Router();
const componentController = require('../controllers/componentController');

router.post('/register', componentController.registerComponent);

module.exports = router;
