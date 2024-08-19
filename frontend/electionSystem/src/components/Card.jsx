// // src/components/ui/Card.jsx
// import React from 'react';

// export const Card = ({ title, icon: Icon, value, description }) => (
//   <div className="p-4 border rounded-md shadow">
//     <div className="flex justify-between items-center">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       {Icon && <Icon className="h-6 w-6 text-gray-500" />}
//     </div>
//     <div className="mt-2 text-2xl font-bold">{value}</div>
//     <p className="text-sm text-gray-500">{description}</p>
//   </div>
// );
// src/components/ui/Card.jsx

//my code 


// export const Card = ({ children }) => (
//   <div className="border rounded-lg shadow-md p-4 bg-white">
//     {children}
//   </div>
// );

// export const CardHeader = ({ children, className }) => (
//   <div className={`border-b pb-2 mb-2 ${className}`}>
//     {children}
//   </div>
// );

// export const CardContent = ({ children }) => (
//   <div className="pt-2">
//     {children}
//   </div>
// );

// export const CardTitle = ({ children, className }) => (
//   <h2 className={`text-lg font-semibold ${className}`}>
//     {children}
//   </h2>
// );
//my code
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

// Card.jsx
// the first code ----------------------------------------------------------------------------------------------------------
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

// export default Card;
// Card.jsx

//-----------------------------------------------------------------------------------
// const Card = ({ title, value, subtitle, icon, children }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4">
//       <div className="flex items-center space-x-4">
//         <div className="flex-shrink-0">
//           {icon}
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold">{title}</h2>
//           <p className="text-gray-600">{subtitle}</p>
//           <p className="text-lg font-bold">{value}</p>
//         </div>
//       </div>
//       <div className="mt-4">
//         {children} {/* هذا هو المكان الذي سيتم فيه عرض VotingPercentage */}
//       </div>
//     </div>
//   );
// };

// export default Card;

// Card.jsx
import React from 'react';

const Card = ({ title, value, subtitle, icon, customContent }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
          <p className="text-lg font-bold">{value}</p>
        </div>
      </div>
      {customContent && (
        <div className="mt-4">
          {customContent} {/* عرض المحتوى المخصص هنا */}
        </div>
      )}
    </div>
  );
};

export default Card;
