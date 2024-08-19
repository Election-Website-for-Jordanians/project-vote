// src/components/Thresholds.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function Thresholds() {
  const [thresholds, setThresholds] = useState(null);
  const [passedListings, setPassedListings] = useState(null);
  const [listRatios, setListRatios] = useState(null); // New state for the ratios
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch thresholds and passed listings
        const thresholdsResponse = await axios.get(
          "http://localhost:4026/api/thresholds"
        );
        setThresholds(thresholdsResponse.data.thresholds);
        setPassedListings(thresholdsResponse.data.passedListings);

        // Fetch the list ratios
        const ratiosResponse = await axios.get(
          "http://localhost:4026/api/list-ratios"
        );
        setListRatios(ratiosResponse.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (error)
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  if (!thresholds || !passedListings || !listRatios)
    return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        صفحة النتائج
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">العتبة لكل محافظة</h3>
        <ul className="space-y-2">
          {Object.entries(thresholds).map(([key, threshold]) => (
            <li
              key={key}
              className="flex justify-between items-center text-gray-700"
            >
              <span>{threshold.name}:</span>
              <span className="font-medium">{threshold.value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">القوائم</h3>
        {Object.entries(passedListings).map(([region, listings]) => (
          <div key={region} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{region}</h4>
            {listings.length > 0 ? (
              <ul className="space-y-2">
                {listings.map((listing) => (
                  <li key={listing.listingID} className="p-2 border rounded">
                    <div className="flex justify-between items-center text-gray-700">
                      <span>{listing.Name}</span>
                      <span className="font-medium">{listing.votingCount}</span>
                    </div>
                    {listing.passedThreshold && (
                      <div className="text-green-600 mt-1">
                        {listing.message}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No listings for this region.</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">نسب القوائم في المقاعد</h3>
        {Object.entries(listRatios).map(([region, ratios]) => (
          <div key={region} className="mb-4">
            <h4 className="text-lg font-semibold mb-2">{region}</h4>
            <ul className="space-y-2">
              {Object.entries(ratios).map(([listName, ratio]) => (
                <li
                  key={listName}
                  className="flex justify-between items-center text-gray-700"
                >
                  <span>{listName}:</span>
                  <span className="font-medium">{ratio}%</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thresholds;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Thresholds() {
//   const [thresholds, setThresholds] = useState(null);
//   const [passedListings, setPassedListings] = useState(null);
//   const [karamaSeatRatio, setKaramaSeatRatio] = useState(null); // New state for the ratio
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch thresholds and passed listings
//         const thresholdsResponse = await axios.get(
//           "http://localhost:4026/api/thresholds"
//         );
//         setThresholds(thresholdsResponse.data.thresholds);
//         setPassedListings(thresholdsResponse.data.passedListings);

//         // Fetch the Karama seat ratio
//         const ratioResponse = await axios.get(
//           "http://localhost:4026/api/karama-seat-ratio"
//         );
//         setKaramaSeatRatio(ratioResponse.data.message);
//       } catch (err) {
//         setError("Failed to fetch data");
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;
//   if (!thresholds || !passedListings || !karamaSeatRatio)
//     return <div className="text-center mt-4">Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//         صفحة النتائج
//       </h2>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">العتبة لكل محافظة</h3>
//         <ul className="space-y-2">
//           {Object.entries(thresholds).map(([key, threshold]) => (
//             <li
//               key={key}
//               className="flex justify-between items-center text-gray-700"
//             >
//               <span>{threshold.name}:</span>
//               <span className="font-medium">{threshold.value.toFixed(2)}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">القوائم</h3>
//         {Object.entries(passedListings).map(([region, listings]) => (
//           <div key={region} className="mb-4">
//             <h4 className="text-lg font-semibold mb-2">{region}</h4>
//             {listings.length > 0 ? (
//               <ul className="space-y-2">
//                 {listings.map((listing) => (
//                   <li key={listing.listingID} className="p-2 border rounded">
//                     <div className="flex justify-between items-center text-gray-700">
//                       <span>{listing.Name}</span>
//                       <span className="font-medium">{listing.votingCount}</span>
//                     </div>
//                     {listing.passedThreshold && (
//                       <div className="text-green-600 mt-1">
//                         {listing.message}
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No listings for this region.</p>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold mb-2">
//           نسبة قائمة الكرامة في المقاعد
//         </h3>
//         <p className="text-gray-700">{karamaSeatRatio}</p>
//       </div>
//     </div>
//   );
// }

// export default Thresholds;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Thresholds() {
//   const [thresholds, setThresholds] = useState(null);
//   const [passedListings, setPassedListings] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4026/api/thresholds"
//         );
//         setThresholds(response.data.thresholds);
//         setPassedListings(response.data.passedListings);
//       } catch (err) {
//         setError("Failed to fetch data");
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;
//   if (!thresholds || !passedListings)
//     return <div className="text-center mt-4">Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//         صفحة النتائج
//       </h2>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">العتبة لكل محافظة</h3>
//         <ul className="space-y-2">
//           {Object.entries(thresholds).map(([key, threshold]) => (
//             <li
//               key={key}
//               className="flex justify-between items-center text-gray-700"
//             >
//               <span>{threshold.name}:</span>
//               <span className="font-medium">{threshold.value.toFixed(2)}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">القوائم</h3>
//         {Object.entries(passedListings).map(([region, listings]) => (
//           <div key={region} className="mb-4">
//             <h4 className="text-lg font-semibold mb-2">{region}</h4>
//             {listings.length > 0 ? (
//               <ul className="space-y-2">
//                 {listings.map((listing) => (
//                   <li key={listing.listingID} className="p-2 border rounded">
//                     <div className="flex justify-between items-center text-gray-700">
//                       <span>{listing.Name}</span>
//                       <span className="font-medium">{listing.votingCount}</span>
//                     </div>
//                     {listing.passedThreshold && (
//                       <div className="text-green-600 mt-1">
//                         {listing.message}
//                       </div>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No listings for this region.</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Thresholds;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Thresholds() {
//   const [thresholds, setThresholds] = useState(null);
//   const [passedListings, setPassedListings] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4026/api/thresholds"
//         );
//         setThresholds(response.data.thresholds);
//         setPassedListings(response.data.passedListings);
//       } catch (err) {
//         setError("Failed to fetch data");
//         console.error(err);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;
//   if (!thresholds || !passedListings)
//     return <div className="text-center mt-4">Loading...</div>;

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//         Election Thresholds and Passed Listings
//       </h2>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Thresholds</h3>
//         <ul className="space-y-2">
//           {Object.entries(thresholds).map(([key, threshold]) => (
//             <li
//               key={key}
//               className="flex justify-between items-center text-gray-700"
//             >
//               <span>{threshold.name}:</span>
//               <span className="font-medium">{threshold.value.toFixed(2)}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Passed Listings</h3>
//         {Object.entries(passedListings).map(([region, listings]) => (
//           <div key={region} className="mb-4">
//             <h4 className="text-lg font-semibold mb-2">{region}</h4>
//             {listings.length > 0 ? (
//               <ul className="space-y-2">
//                 {listings.map((listing) => (
//                   <li
//                     key={listing.listingID}
//                     className="flex justify-between items-center text-gray-700"
//                   >
//                     <span>{listing.Name}</span>
//                     <span className="font-medium">{listing.votingCount}</span>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-500">
//                 No listings passed the threshold for this region.
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Thresholds;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Thresholds() {
//   const [thresholds, setThresholds] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchThresholds = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4026/api/thresholds"
//         );
//         setThresholds(response.data);
//       } catch (err) {
//         setError("Failed to fetch thresholds");
//         console.error(err);
//       }
//     };

//     fetchThresholds();
//   }, []);

//   if (error)
//     return <div className="text-red-500 text-center mt-4">{error}</div>;
//   if (!thresholds) return <div className="text-center mt-4">Loading...</div>;

//   return (
//     <div className="max-w-xl mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">
//         Election Thresholds
//       </h2>
//       <ul className="space-y-2">
//         {Object.entries(thresholds).map(([key, threshold]) => (
//           <li
//             key={key}
//             className="flex justify-between items-center text-gray-700"
//           >
//             <span>{threshold.name}:</span>
//             <span className="font-medium">{threshold.value.toFixed(2)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Thresholds;
