// // داخل ملف `userdataController.js` أو ملف الـ controller المناسب

// const { Advertisment, Citizen } = require('../models'); // تأكد من إضافة الـ Models المطلوبة
// const Sequelize = require('sequelize');
// const { Op } = Sequelize; // Op يستخدم لعمليات الاستعلام المتقدمة مثل `AND` و `OR`

// // دالة لجلب الإعلانات المدفوعة
// const getPaidAdvertisements = async (req, res) => {
//   try {
//     // الحصول على الإعلانات التي تم دفعها وربطها مع جدول Citizen
//     const paidAds = await Advertisment.findAll({
//       where: { isPaid: true },
//       include: {
//         model: Citizen,
//         attributes: ['name'], // جلب الاسم فقط
//         where: { nationalID: Sequelize.col('Advertisment.advertisorID') } // الربط بين الجدولين
//       }
//     });

//     res.status(200).json(paidAds);
//   } catch (error) {
//     console.error('Error fetching paid advertisements:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {

//   getPaidAdvertisements, // تأكد من إضافة الدالة هنا
// };
