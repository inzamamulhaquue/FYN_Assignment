const VehicleService = require('../services/vehicleService');

exports.addVehicle = async (req, res) => {
  try {
    const vehicle = await VehicleService.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
