const router = require('express').Router();
const Vehicle = require('../models/Vehicle');

//ADD VEHICLE
router.post('/', async (req, res) => {
  console.log(req.body);
  const newVehicle = new Vehicle(req.body);
  try {
    console.log('OK');
    await newVehicle.save();
    res.status(200).json('Vehicle details saved');
    console.log('OK');
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//UPDATE VEHICLE
router.put('/:id', async (req, res) => {
  try {
    if (await Vehicle.findById(req.params.id)) {
      await Vehicle.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json('Successfully Updated');
    } else {
      res.status(500).json('Vehicle does not exists');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE VEHICLE
router.delete('/:id', async (req, res) => {
  try {
    if (await Vehicle.findById(req.params.id)) {
      await Vehicle.findByIdAndDelete(req.params.id);
      res.status(200).json('Successfully Deleted');
    } else {
      res.status(500).json('Vehicle does not exists');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL
router.get('/', async (req, res) => {
  const location = req.query.location;
  const date = req.query.date;
  const username = req.query.username;
  try {
    let vehicles;
    if (location && username) {
      vehicles = await Vehicle.find({
        $and: [{ location: location }, { username: username }],
      });
    } else if (date && username) {
      vehicles = await Vehicle.find({
        $and: [{ date: date }, { username: username }],
      });
    } else if (username) {
      vehicles = await Vehicle.find({ username });
    } else {
      vehicles = await Vehicle.find();
    }
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
