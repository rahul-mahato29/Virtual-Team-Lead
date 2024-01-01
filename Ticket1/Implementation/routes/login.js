const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// login route
router.post('/', (req, res) => {
  // Implement user login logic here
  res.send('User login endpoint');

  //creating database
  const user = new userModel({
    username: 'Rahul Mahato',
    email: 'rahul@gmail.com',
    password: 'rahul123'
  });

  user.save();
});

module.exports = router;
