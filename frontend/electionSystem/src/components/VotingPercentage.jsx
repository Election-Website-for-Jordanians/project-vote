import { useState, useEffect } from 'react';
import CirclePercentage from '../components/CirclePercentage'; // تأكد أن هذا المسار صحيح، بناءً على مكان وجود مكون CirclePercentage في مشروعك

const VotingPercentage = () => {
  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    // Fetch the voting percentage from the backend
    fetch('http://localhost:4026/votingresult/total-voting-percentage')
      .then(response => response.json())
      .then(data => {
        setPercentage(data.totalVotingPercentage);
      })
      .catch(error => {
        console.error('Error fetching the voting percentage:', error);
      });
  }, []);

  if (percentage === null) {
    return <div>Loading...</div>; // يمكن استبدالها بشيء آخر يظهر أثناء التحميل
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <CirclePercentage percentage={percentage} title="المشاركة الكلية" subtitle="نسبة الإقبال على التصويت" />
      </div>
    </div>
  );
};

export default VotingPercentage;
//------------------------------------------------------------------------------------------------------
// const VotingPercentage = () => {
//   const percentages = [
//     { percentage: 75, title: 'الحزبية', subtitle: 'نسبة الأحزاب' },
//     { percentage: 50, title: 'المحلية 1', subtitle: 'نسبة محلية 1' },
//     { percentage: 60, title: 'المحلية 2', subtitle: 'نسبة محلية 2' },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* الدائرة الأولى تظهر في سطر منفصل */}
//       <div className="flex justify-center">
//         <CirclePercentage
//           percentage={percentages[0].percentage}
//           title={percentages[0].title}
//           subtitle={percentages[0].subtitle}
//         />
//       </div>
//       {/* الدوائر الثلاث الأخرى تظهر على سطر واحد */}
//       <div className="flex justify-around">
//         {percentages.slice(1).map((item, index) => (
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