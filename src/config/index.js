const mongoose = require('mongoose');

const DBconnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/apiProj');
    console.log('DB connected successfully');
  } catch (err) {
    console.error('DB connection error:', err.message);
  }
};

module.exports = DBconnect;