import { useEffect, useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Voting Percentage for District {districtName}</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <p>{percentage !== null ? `${percentage.toFixed(2)}%` : 'Loading...'}</p>
      )}
    </div>
  );
};

export default DistrictVotingPercentage;
