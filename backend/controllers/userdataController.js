// controllers/userController.js

// const { Citizen } = require('../models');

// // دالة لجلب جميع بيانات المستخدمين
// const getAllUsers = async (req, res) => {
//   try {
//     // الحصول على جميع بيانات المستخدمين
//     const users = await Citizen.findAll({
//       attributes: ['name', 'email', 'didVoteLocal', 'didVoteParty'] // حدد الأعمدة التي تريد عرضها
//     });

//     // إرجاع البيانات كـ JSON
//     return res.json(users);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// module.exports = {
//   getAllUsers,
// };


// controllers/userController.js
// const { Citizen } = require('../models');

// // دالة لجلب جميع بيانات المستخدمين
// const getAllUsers = async (req, res) => {
//   try {
//     // الحصول على جميع بيانات المستخدمين
//     const users = await Citizen.findAll({
//       attributes: ['name', 'email', 'didVoteLocal', 'didVoteParty'] // حدد الأعمدة التي تريد عرضها
//     });
//     // إرجاع البيانات كـ JSON
//     console.log("work");
    
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// module.exports = {
//   getAllUsers,
// };
//my code

// const { Citizen } = require('../models');

// // دالة لجلب جميع بيانات المستخدمين
// const getAllUsers = async (req, res) => {
//   try {
//     // الحصول على جميع بيانات المستخدمين
//     const users = await Citizen.findAll({
//       attributes: ['name', 'email', 'didVoteLocal', 'didVoteParty'] // حدد الأعمدة التي تريد عرضها
//     });
//     // إرجاع البيانات كـ JSON
//     console.log("work");
    
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// // دالة لتحديث البريد الإلكتروني للمستخدم
// // const updateUserEmail = async (req, res) => {
// //   const { nationalID } = req.params;
// //   const { email } = req.body;

// //   try {
// //     const citizen = await Citizen.findOne({ where: { nationalID } });

// //     if (!citizen) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     citizen.email = email;
// //     await citizen.save();

// //     res.json({ message: 'Email updated successfully' });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Something went wrong!' });
// //   }
// // };


// module.exports = {
//   getAllUsers,
//   updateUserEmail, // تأكد من إضافة الدالة هنا
// };

// my new code 
// const { Citizen } = require('../models');

// // دالة لجلب جميع بيانات المستخدمين
// const getAllUsers = async (req, res) => {
//   try {
//     // الحصول على جميع بيانات المستخدمين
//     const users = await Citizen.findAll({
//       attributes: ['nationalID','name', 'email', 'didVoteLocal', 'didVoteParty'] // حدد الأعمدة التي تريد عرضها
//     });
//     // إرجاع البيانات كـ JSON
//     console.log("work");
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// // دالة لتحديث البريد الإلكتروني للمستخدم
// const updateUserEmail = async (req, res) => {
//   const { nationalID } = req.params;
//   const { email } = req.body;

//   try {
//     const citizen = await Citizen.findOne({ where: { nationalID } });

//     if (!citizen) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     citizen.email = email;
//     await citizen.save();

//     res.json({ message: 'Email updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// module.exports = {
//   getAllUsers,
//   updateUserEmail, // تأكد من إضافة الدالة هنا
// };

//lastcode-------------------------------------------------------------------------------------------------
// const { Citizen } = require('../models');

// // دالة لجلب جميع بيانات المستخدمين
// const getAllUsers = async (req, res) => {
//   try {
//     // الحصول على جميع بيانات المستخدمين
//     const users = await Citizen.findAll({
//       attributes: ['nationalID', 'name', 'email', 'didVoteLocal', 'didVoteParty'] // حدد الأعمدة التي تريد عرضها
//     });
//     // إرجاع البيانات كـ JSON
//     console.log("work");
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// // دالة لتحديث البريد الإلكتروني للمستخدم
// const updateUserEmail = async (req, res) => {
//   const { nationalID } = req.params;
//   const { email } = req.body;

//   try {
//     const citizen = await Citizen.findOne({ where: { nationalID } });

//     if (!citizen) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     citizen.email = email;
//     await citizen.save();

//     res.json({ message: 'Email updated successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong!' });
//   }
// };

// // دالة لجلب إحصاءات التصويت
// const getVotingStats = async (req, res) => {
//   try {
//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت محليًا
//     const localVoteCount = await Citizen.count({
//       where: { didVoteLocal: true }
//     });

//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت حزبيًا
//     const partyVoteCount = await Citizen.count({
//       where: { didVoteParty: true }
//     });

//     return res.status(200).json({ localVoteCount, partyVoteCount });
//   } catch (error) {
//     console.error('Error fetching voting stats:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getAllUsers,
//   updateUserEmail,
//   getVotingStats, // تأكد من إضافة الدالة هنا
// };



const { where } = require('sequelize');
const { Citizen } = require('../models');

// دالة لجلب جميع بيانات المستخدمين
const getAllUsers = async (req, res) => {
  try {
    // الحصول على جميع بيانات المستخدمين
    const users = await Citizen.findAll({
      attributes: ['nationalID','name', 'email', 'didVoteLocal', 'didVoteParty','isCandidate'] // حدد الأعمدة التي تريد عرضها
    });
    // console.log("my users",users);
    // إرجاع البيانات كـ JSON
    // console.log("work");
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

// دالة لتحديث البريد الإلكتروني للمستخدم
const updateUserEmail = async (req, res) => {
  const { nationalID } = req.params;
  const { email } = req.body;

  try {
    const citizen = await Citizen.findOne({ where: { nationalID } });

    if (!citizen) {
      return res.status(404).json({ error: 'User not found' });
    }

    citizen.email = email;
    await citizen.save();

    res.json({ message: 'Email updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

// دالة لجلب إحصاءات التصويت
// const getVotingStats = async (req, res) => {
//   try {
//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت محليًا
//     const localVoteCount = await Citizen.count({
//       where: { didVoteLocal: true }
//     });

//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت حزبيًا
//     // const partyVoteCount = await Citizen.count({
//     //   where: { didVoteParty: true }
//     // });

//     return res.status(200).json({ localVoteCount, partyVoteCount });
//   } catch (error) {
//     console.error('Error fetching voting stats:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// الحصول على عدد المرشحين 
const getnumcandidate = async (req,res) =>{
  try{
    const candidatenum = await Citizen.count({
      where :{isCandidate : true }
    });
    return res.status(200).json({candidatenum})
  }catch (error) {
    console.error('Error fetching voting stats:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
// // دالة لجلب إحصاءات التصويت
// const getVotingStats = async (req, res) => {
//   try {
//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت محليًا
//     const localVoteCount = await Citizen.count({
//       where: { didVoteLocal: true }
//     });

//     // الحصول على عدد الأشخاص الذين قاموا بالتصويت حزبيًا
//     const partyVoteCount = await Citizen.count({
//       where: { didVoteParty: true }
//     });

//     return res.status(200).json({ localVoteCount, partyVoteCount });
//   } catch (error) {
//     console.error('Error fetching voting stats:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

module.exports = {
  getAllUsers,

  updateUserEmail,
  getVotingStats, 
  getnumcandidate,

};


