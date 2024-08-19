
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <nav className="space-y-4">
//         <Link to="/overview" className="text-blue-600 hover:underline">Overview</Link>
//         <Link to="/user-management" className="text-blue-600 hover:underline">User Management</Link>
//         <Link to="/election-management" className="text-blue-600 hover:underline">Election Management</Link>
//       </nav>
//     </div>
//   );
// };

// export default AdminDashboard;

//my code
// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminDashboard = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
//       <nav className="bg-white p-4 rounded-md shadow-md flex space-x-4">
//         <Link
//           to="/overview"
//           className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 px-4 py-2 rounded-md border border-gray-300 transition-colors duration-300 ease-in-out"
//         >
//           Overview
//         </Link>
//         <Link
//           to="/user-management"
//           className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 px-4 py-2 rounded-md border border-gray-300 transition-colors duration-300 ease-in-out"
//         >
//           User Management
//         </Link>
//         <Link
//           to="/election-management"
//           className="text-gray-800 hover:bg-gray-100 hover:text-blue-600 px-4 py-2 rounded-md border border-gray-300 transition-colors duration-300 ease-in-out"
//         >
//           Election Management
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default AdminDashboard;



// AdminDashboard.jsx
// import  { useState } from 'react';
// import Overview from './Overview';
// import UserManagement from './UserManagement';
// import ElectionManagement from './ElectionManagement';
// import Card from './ui/Card';


// Jordanian flag colors

// const CirclePercentage = ({ percentage, title, subtitle }) => (
//   <div className="flex flex-col items-center">
//     <div className="relative w-24 h-24">
//       <svg className="w-full h-full" viewBox="0 0 36 36">
//         <path
//           d="M18 2.0845
//             a 15.9155 15.9155 0 0 1 0 31.831
//             a 15.9155 15.9155 0 0 1 0 -31.831"
//           fill="none"
//           stroke={colors.black}
//           strokeWidth="3"
//         />
//         <path
//           d="M18 2.0845
//             a 15.9155 15.9155 0 0 1 0 31.831
//             a 15.9155 15.9155 0 0 1 0 -31.831"
//           fill="none"
//           stroke={colors.red}
//           strokeWidth="3"
//           strokeDasharray={`${percentage}, 100`}
//         />
//       </svg>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
//         {percentage}%
//       </div>
//     </div>
//     <h3 className="mt-2 text-md font-semibold">{title}</h3>
//     <p className="text-sm text-gray-500">{subtitle}</p>
//   </div>
// );

// const Card = ({ title, value, subtitle, icon }) => (
//   <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-sm mx-auto">
//     <div className="flex items-center justify-between mb-4">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       {icon}
//     </div>
//     <div className="text-3xl font-bold">{value}</div>
//     <p className="text-sm text-gray-500">{subtitle}</p>
//   </div>
// );


// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div className="p-8">
//       <div className="flex space-x-4 mb-6">
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('overview')}
//         >
//           الصفحة الرئيسية
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'user-management' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('user-management')}
//         >
//           إدارة المستخدمين
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'election-management' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('election-management')}
//         >
//           إدارة الانتخابات
//         </button>
//         {/* <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('card')}
//         >
//           الكارد
//         </button> */}
//       </div>
//       <div>
//         {activeTab === 'overview' && <Overview />}
//         {activeTab === 'user-management' && <UserManagement />}
//         {activeTab === 'election-management' && <ElectionManagement />}
//         {/* {activeTab === 'card' && <Card title="مثال كارد" value="100" subtitle="توضيح" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18m-7 4h7" /></svg>} />} */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
//---------------------------------------------------------------------------------------
// import { useState } from 'react';
// import Overview from './Overview';
// import UserManagement from './UserManagement';
// import ElectionManagement from './ElectionManagement';
// // import cyrcle from '../components/CirclePercentage';
// // قم بإضافة استيراد الكود المطلوب لرسمة الدوائر هنا

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div className="p-8">
//       {/* تعديل لتوسيط التبويبات */}
//       <div className="flex justify-center space-x-4 mb-6">
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'overview' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('overview')}
//         >
//           الصفحة الرئيسية
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'user-management' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('user-management')}
//         >
//           إدارة المستخدمين
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'election-management' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('election-management')}
//         >
//           إدارة الانتخابات
//         </button>
//         {/* يمكنك إعادة تفعيل الكارد إذا كان له ضرورة */}
//         {/* <button
//           className={`px-4 py-2 font-semibold rounded-md ${activeTab === 'card' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           onClick={() => setActiveTab('card')}
//         >
//           الكارد
//         </button> */}
//       </div>
//       <div>
//         {activeTab === 'overview' && <Overview />}
//         {activeTab === 'user-management' && <UserManagement />}
//         {activeTab === 'election-management' && <ElectionManagement />}
//         {/* {activeTab === 'card' && <Card title="مثال كارد" value="100" subtitle="توضيح" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18m-7 4h7" /></svg>} />} */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
//---------------------------------------------------------------------------------------
// import { useState } from 'react';
// import Overview from './Overview';
// import UserManagement from './UserManagement';
// import ElectionManagement from './ElectionManagement';
// // import cyrcle from '../components/CirclePercentage'; // قم بإضافة استيراد الكود المطلوب لرسمة الدوائر هنا

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-black text-white p-6 flex-shrink-0">
//         <h2 className="text-2xl font-bold mb-6 text-red-500">لوحة التحكم</h2>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <button
//                 className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'overview' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
//                 onClick={() => setActiveTab('overview')}
//               >
//                 الصفحة الرئيسية
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'user-management' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
//                 onClick={() => setActiveTab('user-management')}
//               >
//                 إدارة المستخدمين
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'election-management' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
//                 onClick={() => setActiveTab('election-management')}
//               >
//                 إدارة الانتخابات
//               </button>
//             </li>
//             {/* يمكنك إعادة تفعيل الكارد إذا كان له ضرورة */}
//             {/* <li className="mb-4">
//               <button
//                 className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'card' ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-300'}`}
//                 onClick={() => setActiveTab('card')}
//               >
//                 الكارد
//               </button>
//             </li> */}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 bg-gray-100">
//         {activeTab === 'overview' && <Overview />}
//         {activeTab === 'user-management' && <UserManagement />}
//         {activeTab === 'election-management' && <ElectionManagement />}
//         {/* {activeTab === 'card' && <Card title="مثال كارد" value="100" subtitle="توضيح" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18m-7 4h7" /></svg>} />} */}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
//----------------------------------------------------------------------------------------
import { useState } from 'react';
import Overview from './Overview';
import UserManagement from './UserManagement';
import ElectionManagement from './ElectionManagement';
// import cyrcle from '../components/CirclePercentage'; // قم بإضافة استيراد الكود المطلوب لرسمة الدوائر هنا

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-red-500 text-white p-6 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6">لوحة التحكم</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'overview' ? 'bg-white text-red-500' : 'bg-red-600 text-white'}`}
                onClick={() => setActiveTab('overview')}
              >
                الصفحة الرئيسية
              </button>
            </li>
            <li className="mb-4">
              <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'user-management' ? 'bg-white text-red-500' : 'bg-red-600 text-white'}`}
                onClick={() => setActiveTab('user-management')}
              >
                إدارة المستخدمين
              </button>
            </li>
            <li className="mb-4">
              <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'election-management' ? 'bg-white text-red-500' : 'bg-red-600 text-white'}`}
                onClick={() => setActiveTab('election-management')}
              >
                إدارة الانتخابات
              </button>
            </li>
            {/* يمكنك إعادة تفعيل الكارد إذا كان له ضرورة */}
            {/* <li className="mb-4">
              <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md ${activeTab === 'card' ? 'bg-white text-red-500' : 'bg-red-600 text-white'}`}
                onClick={() => setActiveTab('card')}
              >
                الكارد
              </button>
            </li> */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'user-management' && <UserManagement />}
        {activeTab === 'election-management' && <ElectionManagement />}
        {/* {activeTab === 'card' && <Card title="مثال كارد" value="100" subtitle="توضيح" icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8h18M3 12h18m-7 4h7" /></svg>} />} */}
      </main>
    </div>
  );
};

export default AdminDashboard;
