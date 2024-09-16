const mongoose = require('mongoose');

const URI='mongodb://localhost:27017/databasefyn';

const connectdatabase = async () => {
    try{
        await mongoose.connect(URI)
        console.log('Database connected');
    } catch(err){
    console.error('Database connection error:', err);
  }
};

module.exports = connectdatabase;
