import AdminDashboard from "../components/admindashboard";
import { useState, useEffect } from 'react';
import axios from '../components/axios';

const ElectionManagement = () => {
  const [localListings, setLocalListings] = useState([]);
  const [partyListings, setPartyListings] = useState([]);

  const fetchListings = async () => {
    try {
      const localResponse = await axios.get('/api/admin/local-listings');
      setLocalListings(localResponse.data);

      const partyResponse = await axios.get('/api/admin/party-listings');
      setPartyListings(partyResponse.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const removeCandidate = async (candidateID, listingType) => {
    try {
      await axios.post('/api/admin/remove-candidate', { candidateID, listingType });
      fetchListings(); // Refresh the listings after removal
    } catch (error) {
      console.error('Error removing candidate:', error);
    }
  };

  const ListingCard = ({ listing, type }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">{listing.Name}</h2>
      <div className="mb-4">
        <p className="text-gray-700">Voting Count: <span className="font-semibold">{listing.votingCount}</span></p>
        <p className="text-gray-700">Status: 
          <span className={`font-semibold ${listing.didPass ? 'text-green-600' : 'text-red-600'}`}>
            {listing.didPass ? ' Passed' : ' Not Passed'}
          </span>
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-indigo-500">Candidates:</h3>
      <ul className="space-y-3">
        {listing.candidates && listing.candidates.map((candidate) => (
          <li key={candidate.candidateID} className="bg-gray-100 p-3 rounded-md shadow">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-lg">{candidate.citizenInfo?.name || 'Name not available'}</p>
              <button 
                onClick={() => removeCandidate(candidate.candidateID, type)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm"
              >
                Remove
              </button>
            </div>
            <p className="text-sm text-gray-600">ID: {candidate.candidateID}</p>
            <p>Gender: {candidate.gender}</p>
            <p>Quota: {candidate.Quota}</p>
            <p>Votes: {candidate.votingCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <AdminDashboard />
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-800">Election Management</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Local Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localListings.map((listing) => (
            <ListingCard key={listing.listingID} listing={listing} type="local" />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Party Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partyListings.map((listing) => (
            <ListingCard key={listing.partyID} listing={listing} type="party" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ElectionManagement;