const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default:Date.now
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sellerName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
