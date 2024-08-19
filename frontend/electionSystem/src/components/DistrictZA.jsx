// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const DistrictVotingPercentage = ({ districtName }) => {
//   const [percentage, setPercentage] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPercentage = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4026/api/districts/${districtName}`);
//         setPercentage(response.data.votingPercentage);  
//       } catch (err) {
//         setError('Error fetching data');
//       }
//     };

//     fetchPercentage();
//   }, [districtName]);

//   return (
//     <div>
//       <h2>Voting Percentage for District {districtName}</h2>
//       {error ? (
//         <p>{error}</p>
//       ) : (
//         <p>{percentage !== null ? `${percentage.toFixed(2)}%` : 'Loading...'}</p>
//       )}
//     </div>
//   );
// };

// export default DistrictVotingPercentage;
//------------------------------------------------------------
import { useEffect, useState } from 'react';
import axios from 'axios';
import CirclePercentage from '../components/CirclePercentage'; // تأكد من أن المسار صحيح

const DistrictVotingPercentage = ({ districtName }) => {
  const [percentage, setPercentage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPercentage = async () => {
      try {
        const response = await axios.get(`http://localhost:4026/api/districts/${districtName}`);
        setPercentage(response.data.votingPercentage);  
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchPercentage();
  }, [districtName]);

  if (error) {
    return <p>{error}</p>;
  }

  if (percentage === null) {
    return <div>Loading...</div>;
  }

  return (
<<<<<<< HEAD
    <div>
      <h2>الزرقاء {districtName}</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{percentage !== null ? `${percentage.toFixed(2)}%` : 'Loading...'}</p>
      )}
=======
    <>
    <div className="flex justify-center">
      <CirclePercentage 
        percentage={percentage.toFixed(2)} 
        title={`District ${districtName}`} 
        subtitle={`Voting percentage in ${districtName}`} 
      />

      
>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
    </div>
    </>
  );
};

export default DistrictVotingPercentage;
