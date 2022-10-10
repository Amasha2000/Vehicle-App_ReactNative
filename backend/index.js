const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const vehicleRoute = require('./routes/vehicle');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use(express.static('./images'));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to mongo'))
  .catch((err) => {
    console.log(err);
  });

const storage = multer.diskStorage({
  destination: './images/',
  filename: (req, file, cb) => {
    cb(null, req.body.image);
  }
});

const upload = multer({ storage: storage });
// console.log(storage.destination);
// console.log(upload);
app.post('/api/upload', upload.single('file'), (req, res)  => {
    console.log(req.body.image)
    res.status(200).json('File has been uploaded');
    console.log('Uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/vehicles', vehicleRoute);

app.listen('5000', () => {
  console.log('Backend is running');
});
