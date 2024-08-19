const { LocalListing, localListingInformation,Citizen } = require('../models');

/****************create Local Listing****************** */
exports.createLocalListing = async (req, res) => {

  try {
    // 1. إنشاء قائمة جديدة

const { listingID, ...newLocalListingData } = req.body;

try {
  
  const localList = await LocalListing.create(newLocalListingData);

  
  res.status(201).json({
    message: 'Local listing created successfully',
    localListId: localList.listingID,
  });
} catch (error) {
  console.error('Error creating local listing:', error);
  res.status(500).json({ message: 'Error creating local listing', error });
}

  } catch (error) {
    
    console.error('Error creating local listing :', error);
    res.status(500).json({ error: 'Error creating local listing ' });
  }
};
/****************end create Local Listing****************** */
/****************create local Listing Information****************** */

exports.createlocalListingInformation = async (req, res) => {
  try {
    // التحقق من وجود nationalID في جدول Citizens
    const citizen = await Citizen.findOne({
      where: { nationalID: req.body.nationalID }
    });

    // إذا لم يتم العثور على المواطن
    if (!citizen) {
      return res.status(400).json({ error: 'Citizen with this nationalID does not exist' });
    }

    // إنشاء السجل إذا كان nationalID موجودًا
    const LocalListingInformation = await localListingInformation.create(req.body);
    res.status(201).json({
      message: 'local Listing Information created successfully',
      localListingInformationId: LocalListingInformation.listingInformationID
    });

  } catch (error) {
    console.error('Error creating local Listing Information:', error);
    res.status(500).json({ error: 'Error creating local Listing Information' });
  }
};
/****************end create local Listing Information****************** */

/****************get Local Listing****************** */
exports.getLocalListing = async (req, res) => {
  try {
    // 1. الحصول على جميع الدوائر
    const localLists = await LocalListing.findAll();

    // التأكد من أن هناك بيانات
    if (!localLists || localLists.length === 0) {
      return res.status(404).json({ message: 'No local listings found.' });
    }

    // إرجاع قائمة الأسماء فقط إذا كانت موجودة
    const localListNames = localLists.map(list => list.Name);

    res.status(200).json({
      message: 'Local listings retrieved successfully',
      localListNames: localListNames
    });

  } catch (error) {
    console.error('Error retrieving local listings:', error);
    res.status(500).json({ error: 'Error retrieving local listings' });
  }
};
/****************end get Local Listing****************** */
