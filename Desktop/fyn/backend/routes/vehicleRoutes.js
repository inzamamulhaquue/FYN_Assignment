const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/add', vehicleController.addVehicle);

module.exports = router;
