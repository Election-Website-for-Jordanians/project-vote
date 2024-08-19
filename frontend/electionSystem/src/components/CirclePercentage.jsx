

// // Jordanian flag colors
// const colors = {
//   red: '#CE1126',
//   white: '#FFFFFF',
//   black: '#000000',
//   green: '#007A3D',
// };

// const CirclePercentage = ({ percentage, title, subtitle }) => (
//   <div className="flex flex-col items-center">
//     <div className="relative w-24 h-24">
//       <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
//         <path
//           className="text-gray-200"
//           fill="none"
//           strokeWidth="4"
//           strokeLinecap="round"
//           d="M18 2.0845a16 16 0 0 1 0 31.8315A16 16 0 0 1 18 2.0845"
//         />
//         <path
//           className="text-blue-500"
//           fill="none"
//           strokeWidth="4"
//           strokeLinecap="round"
//           strokeDasharray={`${percentage} ${100 - percentage}`}
//           d="M18 2.0845a16 16 0 0 1 0 31.8315A16 16 0 0 1 18 2.0845"
//         />
//       </svg>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-2xl font-semibold">{percentage}%</span>
//       </div>
//     </div>
//     <div className="text-center mt-4">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-sm text-gray-500">{subtitle}</p>
//     </div>
//   </div>
// );

// export default CirclePercentage;


//-------------------------------------------------------------------------------------------------------
// import React from 'react';

const CirclePercentage = ({ percentage, title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
          <circle
            className="text-gray-300"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="3"
            cx="18"
            cy="18"
            r="16"
          />
          <circle
            className="text-red-500"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="3"
            strokeDasharray={`${percentage}, 100`}
            cx="18"
            cy="18"
            r="16"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
          {percentage}%
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default CirclePercentage;
// const Overview = () => {
//   const data = [
//     { percentage: 75, title: 'Voter Turnout', subtitle: 'Percentage of voters who participated' },
//     { percentage: 50, title: 'Election Coverage', subtitle: 'Areas covered by election' },
//     { percentage: 90, title: 'Candidate Approval', subtitle: 'Percentage of approved candidates' },
//   ];

//   return (
//     <div className="flex justify-around">
//       {data.map((item, index) => (
//         <CirclePercentage
//           key={index}
//           percentage={item.percentage}
//           title={item.title}
//           subtitle={item.subtitle}
//         />
//       ))}
//     </div>
//   );
// };

// export default Overview;
//-----------------------------------------------------------------------------------------------


// const CirclePercentage = ({ percentage, title, subtitle }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-40 h-40">
//         <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
//           <circle
//             className="text-gray-300"
//             stroke="currentColor"
//             fill="transparent"
//             strokeWidth="3"
//             cx="18"
//             cy="18"
//             r="16"
//           />
//           <circle
//             className="text-red-500"
//             stroke="currentColor"
//             fill="transparent"
//             strokeWidth="3"
//             strokeDasharray={`${percentage}, 100`}
//             cx="18"
//             cy="18"
//             r="16"
//             strokeLinecap="round"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
//           {percentage}%
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-500">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// const Overview = () => {
//   const data = [
//     { percentage: 75, title: 'Voter Turnout', subtitle: 'Percentage of voters who participated' },
//     { percentage: 50, title: 'Election Coverage', subtitle: 'Areas covered by election' },
//     { percentage: 90, title: 'Candidate Approval', subtitle: 'Percentage of approved candidates' },
//     { percentage: 65, title: 'Party Support', subtitle: 'Percentage of party support' },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* الدائرة الأولى تظهر في سطر منفصل */}
//       <div className="flex justify-center">
//         <CirclePercentage
//           percentage={data[0].percentage}
//           title={data[0].title}
//           subtitle={data[0].subtitle}
//         />
//       </div>
//       {/* الدوائر الثلاث الأخرى تظهر على سطر واحد */}
//       <div className="flex justify-around">
//         {data.slice(1).map((item, index) => (
//           <CirclePercentage
//             key={index}
//             percentage={item.percentage}
//             title={item.title}
//             subtitle={item.subtitle}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Overview;
//-------------------------------------------------------------------------------------------------
// const CirclePercentage = ({ percentage, title, subtitle }) => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-40 h-40">
//         <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
//           <circle
//             className="text-gray-300"
//             stroke="currentColor"
//             fill="transparent"
//             strokeWidth="3"
//             cx="18"
//             cy="18"
//             r="16"
//           />
//           <circle
//             className="text-red-500"
//             stroke="currentColor"
//             fill="transparent"
//             strokeWidth="3"
//             strokeDasharray={`${percentage}, 100`}
//             cx="18"
//             cy="18"
//             r="16"
//             strokeLinecap="round"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
//           {percentage}%
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-500">{subtitle}</p>
//       </div>
//     </div>
//   );
// };
