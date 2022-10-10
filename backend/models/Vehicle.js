const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default:Date.now
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required:true
  }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
