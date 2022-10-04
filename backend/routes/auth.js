const router = require('express').Router();
const User = require('../models/User');

//REGISTER
router.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(200).json('User Registered Successfully');
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong credentials');

    !(user.password === req.body.password) &&
      res.status(400).json('Wrong credentials');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
