const Vehicle = require('../models/vehicleModel');

exports.createVehicle = async (data) => {
  const vehicle = new Vehicle(data);
  return await vehicle.save();
};
