import { Link } from 'react-router-dom';

function LocalOrParty(){
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-green-100">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-xl">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">نظام إدارة القوائم</h1>
        <div className="space-y-4">
          <Link
            to="/add-party-list"
            className="block w-full py-3 text-center text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
          >
            إضافة قائمة حزبية
          </Link>
          <Link
            to="/add-local-list"
            className="block w-full py-3 text-center text-white transition duration-300 ease-in-out transform bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105"
          >
            إضافة قائمة محلية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocalOrParty;