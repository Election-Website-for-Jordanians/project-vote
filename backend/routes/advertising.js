const express = require('express');
const router = express.Router();
const advertisingcontroller = require('../controllers/advertisingcontroller.js');

// usere is from token
router.post('/validate-token', advertisingcontroller.validateToken);

//Request Advertisement
router.post('/RequestAdvertisement', advertisingcontroller.RequestAdvertisement);

//get Advertisement
router.get('/getAdvertisement', advertisingcontroller.getAdvertisement);


module.exports = router;




