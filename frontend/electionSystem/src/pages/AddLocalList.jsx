import { useState } from 'react';
import axios from 'axios';

function AddLocalList() {
  const [Name, setListName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false); // حالة لتتبع ما إذا تم إدخال الاسم
  const [nationalID, setNationalId] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(true);
  const [candidacyCourse, setCandidacyCourse] = useState('');
  const [gender, setGender] = useState('');
  const [localListingID, setLocalListID] = useState('');

  /******************************** */
  // Function to handle form submission create Local Listing
  const handleAddLocalList = async (e) => {
    e.preventDefault();

    if (!Name) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4026/api/LocalList/createLocalList', { Name });
      console.log(response);
      const localListId = response.data.localListId;
      setLocalListID(localListId);
      setNameSubmitted(true); // تعيين حالة إدخال الاسم
      if (response.status === 201) {
        setMessage("تمت إضافة القائمة بنجاح.");
        setShowMessage(true);
        setListName('');
      }
    } catch (error) {
      console.error("حدث خطأ أثناء إضافة القائمة:", error);
      alert("حدث خطأ، يرجى المحاولة مرة أخرى.");
    }
  };

  /******************************** */
  // Function to handle form submission create local Listing Information
  const handleAddlocalListingInformation = async (e) => {
    e.preventDefault();
    if (!nationalID || !gender || !candidacyCourse) {
      alert("يرجى تعبئة جميع الحقول.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:4026/api/LocalList/localListingInformation', {
        nationalID,
        gender,
        candidacyCourse,
        localListingID
      });

      if (response.status === 201) {
        alert("تمت إضافة المعلومات بنجاح.");
        setNationalId('');
        setGender('');
        setCandidacyCourse('');
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error === 'Citizen with this nationalID does not exist') {
        alert("يرجى إدخال رقم وطني موجود بالفعل.");
      } else {
        console.error("حدث خطأ أثناء إضافة المعلومات:", error);
        alert("حدث خطأ، يرجى المحاولة مرة أخرى.");
      }
    }
  };

  /******************************* */
  // Function to handle cancel button click
  const handleCancel = () => {
    setListName('');
    setNameSubmitted(false); // إعادة تعيين حالة إدخال الاسم
    setShowMessage(false);
  };

  /******************************* */
  return (
    <div className="min-h-screen px-4 py-12 bg-white sm:px-6 lg:px-8 font-amiri">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-extrabold text-gray-900">إدارة القائمة المحلية</h1>
        </div>

        <div className="mb-8 overflow-hidden bg-white shadow-xl text-end">
          <div className="p-6 space-y-4">
            {showMessage && message && (
              <div className="relative p-3 mb-4 text-center text-white bg-green-500 rounded-md">
                {message}
                <button
                  onClick={() => setShowMessage(false)}
                  className="absolute text-2xl font-bold text-white top-1 right-2"
                >
                  ×
                </button>
              </div>
            )}

            {!nameSubmitted ? (
              <form onSubmit={handleAddLocalList}>
                <input
                  type="text"
                  value={Name}
                  onChange={(e) => setListName(e.target.value)}
                  placeholder="اسم القائمة"
                  className="w-full p-3 transition duration-200 border-2 border-gray-300 outline-none focus:border-red-500 focus:ring focus:ring-red-200 text-end"
                />
                <div className="flex justify-end gap-4 mt-2">
                  <button type="submit" className="inline-block bg-[#166534] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-[#15803d]">
                    تأكيد
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <h3 className="mb-4 text-xl font-semibold text-gray-700">اسم القائمة: </h3>
                <form onSubmit={handleAddlocalListingInformation}>
                  <input
                    type="text"
                    value={nationalID}
                    onChange={(e) => setNationalId(e.target.value)}
                    placeholder="الرقم الوطني للعضو"
                    className="w-full p-3 mt-4 transition duration-200 border-2 border-gray-300 outline-none focus:border-red-500 focus:ring focus:ring-red-200"
                  />
                  <div className="mt-4">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">الجنس</label>
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="block w-full p-3 mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    >
                      <option value="">اختر الجنس</option>
                      <option value="Male">ذكر</option>
                      <option value="Female">أنثى</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="candidacyCourse" className="block text-sm font-medium text-gray-700">الدور</label>
                    <select
                      id="candidacyCourse"
                      value={candidacyCourse}
                      onChange={(e) => setCandidacyCourse(e.target.value)}
                      className="block w-full p-3 mt-1 border-2 border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                    >
                      <option value="">اختر الدور</option>
                      <option value="Muslim">مسلم</option>
                      <option value="Chechen">شيشاني</option>
                      <option value="Christian">مسيحي</option>
                      <option value="Female">كوتة نسائية</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-4 mt-2">
                    <button type="button" onClick={handleCancel} className="inline-block bg-[#CE1126] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-[#A50E1F]">
                      إلغاء
                    </button>
                    <button type="submit" className="inline-block bg-[#166534] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-[#15803d]">
                      اضافة
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocalList;
