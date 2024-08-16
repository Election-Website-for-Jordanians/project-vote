const {advertisment} = require('../models');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtconfig');
require('dotenv').config();


// usere is from token

exports.validateToken = (req, res) => {
    const token = req.body.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.json({ advertisorID: decoded.id });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
//end usere is from token

// ********Request Advertisement

exports.RequestAdvertisement = async (req, res) => {
  try {
    const { advertismentID, title, advertisorID, description} = req.body;
    
    // Attempt to create a new advertisement
    const advertisement = await advertisment.create({
      advertismentID,
      title,
      advertisorID,
      description
    });
    
    res.status(201).json(advertisement); // Return the created advertisement with a 201 status
  } catch (error) {
    console.error(error);  // Print error for debugging
    res.status(500).json({ error: 'Internal server error while creating advertisement' });
  }
};


// ********end Request Advertisement

exports.getAdvertisement = async (req, res) => {
  console.log("hi2");
  try {
    console.log("hi");
    const advertisment = await advertisment.findAll();
    console.log(advertisment);
    res.json(advertisment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


