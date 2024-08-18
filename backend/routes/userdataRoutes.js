// routes/userRoutes.js

// const express = require('express');
// const router = express.Router();
// const { getAllUsers } = require('../controllers/userdataController');

// // مسار لجلب جميع المستخدمين
// router.get('/users', getAllUsers);

// module.exports = router;


// routes/userdataRoutes.js
//my code
const express = require('express');
const router = express.Router(); 
const { getAllUsers } = require('../controllers/userdataController');
const { updateUserEmail } = require('../controllers/userdataController');
const {getVotingStats} =require('../controllers/userdataController')
// مسار لجلب جميع المستخدمين
router.get('/users', getAllUsers);   
// مسار لتحديث البريد الإلكتروني لمستخدم معين باستخدام nationalID
router.put('/api/users/:nationalID', updateUserEmail); //اول سي بالباث من السيرفر app.use('/test', userdata);//duaa /test
// مسار لجلب إحصاءات التصويت
router.get('/voting-stats', getVotingStats);

// router.put('/api/users/:nationalID', async (req, res) => {
//     try {
//       const { userId } = req.params;
//       const { email } = req.body;
//       // Update user logic here
//       res.status(200).json({ message: 'User updated successfully' });
//     } catch (error) {
//       console.error('Error updating user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
// // مسار لجلب مستخدم معين باستخدام ID
// router.get('/users/:id', getUserById);

// // مسار لتحديث بيانات مستخدم
// router.put('/users/:id', updateUser);

module.exports = router;
