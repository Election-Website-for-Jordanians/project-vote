const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatcontroller');
const authMiddleware = require('../middlwares/auth');

router.get('/messages', authMiddleware, chatController.getMessages);
router.post('/messages', authMiddleware, chatController.sendMessage);

module.exports = router;