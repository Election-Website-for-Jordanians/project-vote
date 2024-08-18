import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddPartyList() {
  const { listType } = useParams();
  const navigate = useNavigate();
  const [listName, setListName] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [members, setMembers] = useState([]);

  const addMember = () => {
    if (nationalId.trim()) {
      setMembers([...members, { id: Date.now(), nationalId }]);
      setNationalId('');
    }
  };

  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة المنطق لحفظ القائمة في قاعدة البيانات
    console.log('تم حفظ القائمة:', { listName, members, type: listType });
    navigate('/');
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-blue-100 to-green-100 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto overflow-hidden bg-white shadow-md rounded-xl">
        <div className="p-8">
          <h2 className="mb-6 text-2xl font-bold text-center">
            {listType === 'party' ? 'إضافة قائمة حزبية' : 'إضافة قائمة محلية'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="listName" className="block text-sm font-medium text-gray-700">اسم القائمة</label>
              <input
                type="text"
                id="listName"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700">الرقم الوطني للعضو</label>
              <div className="flex mt-1 rounded-md shadow-sm">
                <input
                  type="text"
                  id="nationalId"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-none rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={addMember}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-l-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  إضافة
                </button>
              </div>
            </div>
            <ul className="divide-y divide-gray-200">
              {members.map((member) => (
                <li key={member.id} className="flex items-center justify-between py-4">
                  <span>{member.nationalId}</span>
                  <button
                    type="button"
                    onClick={() => removeMember(member.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    حذف
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                حفظ القائمة
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPartyList;