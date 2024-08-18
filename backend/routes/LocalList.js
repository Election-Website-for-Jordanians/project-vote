const express = require('express');
const router = express.Router();
const LocalListController = require('../controllers/LocalListController');


router.post('/createLocalList', LocalListController.createLocalListing);
router.post('/localListingInformation', LocalListController.createlocalListingInformation);
router.post('/getLocalListing', LocalListController.getLocalListing);



module.exports = router;
