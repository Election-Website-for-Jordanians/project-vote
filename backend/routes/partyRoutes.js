// const express = require('express');
// const router = express.Router();

// // Define your routes here
// router.get('/', (req, res) => {
//   res.send('Voting results');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const { calculateTotalVotingPercentage } = require('../controllers/partyController');

// Route to get the total voting percentage
router.get('/total-voting-percentage', calculateTotalVotingPercentage);

module.exports = router;
