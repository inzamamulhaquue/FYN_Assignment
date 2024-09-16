const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const componentRoutes = require('./routes/componentRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const issueRoutes = require('./routes/issueRoutes');

const app = express();
app.use(bodyParser.json());

// Database connection
const connectdatabase = require('./config/db');
connectdatabase();

// Routes
app.use('/components', componentRoutes);
app.use('/vehicles', vehicleRoutes);
app.use('/issues', issueRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
