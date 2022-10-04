const router = require('express').Router();
const User = require('../models/User');

//UPDATE USER
router.put('/:id', async (req, res) => {
  try {
    if (await User.find(req.params.id)) {
      await User.findByIdAndUpdate(req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json('Updated Successfully');
    } else {
      res.status(500).json('User does not exist');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    if (await User.find(req.params.id)) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Successfully Deleted');
    } else {
      res.status(500).json('User does not exist');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
