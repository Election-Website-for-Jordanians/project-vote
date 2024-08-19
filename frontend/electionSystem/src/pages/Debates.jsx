// import React from 'react'

// function Debates() {
//   const getGradientStyle = (color1, color2, color3) => ({
//     borderImage: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3}) 1 / 4px`,
//     borderImageSlice: 1,
//   });

//   const borderColors = ["red", "black", "green"];
//   return (
//     <>
//     <h2 className="title text-2xl sm:text-3xl font-bold text-center my-6 sm:my-10">
//    المناظرات
//       </h2>
//       <div className="join flex justify-center my-16">
  
//   <div className="indicator">
//   <label className="input input-bordered flex items-center gap-2">
//   <input type="text" className="grow" placeholder="Search" />
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 16 16"
//     fill="currentColor"
//     className="h-4 w-4 opacity-70">
//     <path
//       fillRule="evenodd"
//       d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//       clipRule="evenodd" />
//   </svg>
// </label>
//   </div>
// </div>
      
// <div className="shawrma">
//       <div className="container grid grid-cols-3 grid-rows-auto justify-center items-center gap-28 my-0 mx-auto ">
//       {["دائرة الزرقاء", "دائرة الزرقاء", "دائرة الزرقاء","دائرة الزرقاء","دائرة الزرقاء" ].map(
//             (title, index) => (
//               <div className="wrapper" key={index}>
//                 <div
//                   className="card  bg-base-100 w-full sm:w-[18rem] md:w-[24rem] lg:w-[28rem] shadow-xl border-2 transition-all"
//                   style={getGradientStyle("red", "black", "green")}
//                 >
//                   <figure className=" p-6">
//                     <img
//                       src="https://www.iec.jo/sites/default/files/styles/d10_standard/public/images/2024-08/whatsapp_image_2024-08-13_at_6.14.18_pm.jpeg?h=09deafb6&itok=IKuP_Ech"
//                       alt="Shoes"
//                       className="rounded-xl w-full"
//                     />
//                   </figure>
//                   <span
//                     className="my-4 md:my-6 mx-auto inline-block w-full md:w-72 text-center rounded-[5px] py-0.5 text-xs font-medium leading-loose text-white"
//                     style={{
//                       backgroundColor:
//                         borderColors[index % borderColors.length],
//                     }}
//                   >
//                     Jan 05, 2023
//                   </span>
//                   <div className="card-body pt-2 md:pt-3 items-center text-center">
//                     <h2
//                       className="mb-2 md:mb-4 inline-block text-lg md:text-xl font-semibold"
//                       style={{
//                         color: borderColors[index % borderColors.length],
//                       }}
//                     >
//                       {title}
//                     </h2>
//                     <p className="text-sm md:text-base">
//                       Lorem ipsum dolor sit amet consectetur.
//                     </p>
//                     <div className="card-actions">
//                       <button
//                         className="btn mt-2"
//                         style={{
//                           backgroundColor:
//                             borderColors[index % borderColors.length],
//                           borderColor:
//                             borderColors[index % borderColors.length],
//                           color: "white",
//                         }}
//                       >
//                         شاهد الآن
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//       </div>
//       </div>
//       <div className="join my-6 mx-auto flex justify-center border-2 border-red-600 w-fit">
//   <button className="join-item btn hover:bg-red-600 hover:text-white ">1</button>
//   <button className="join-item btn hover:bg-red-600 hover:text-white ">2</button>
//   <button className="join-item btn hover:bg-red-600 hover:text-white ">3</button>
//   <button className="join-item btn hover:bg-red-600 hover:text-white ">4</button>
// </div>
//     </>
//   )
// }

// export default Debates



import React, { useState, useEffect } from 'react';

function Debates() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredItems, setFilteredItems] = useState([]);
  const itemsPerPage = 6;

  const getGradientStyle = (color1, color2, color3) => ({
    borderImage: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3}) 1 / 4px`,
    borderImageSlice: 1,
  });

  const borderColors = ["red", "black", "green"];

  const allItems = [
    "دائرة الزرقاء 1", "دائرة أربد 2", "دائرة أربد 3",
    "دائرة أربد 4", "دائرة الزرقاء 5", "دائرة الزرقاء 6",
    "دائرة الزرقاء 7", "دائرة الزرقاء 8", "دائرة الزرقاء 9",
    "دائرة الزرقاء 10", "دائرة الزرقاء 11", "دائرة الزرقاء 12",
    "دائرة الزرقاء 13", "دائرة الزرقاء 14", "دائرة الزرقاء 15"
  ];

  useEffect(() => {
    const results = allItems.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h2 className="title text-2xl sm:text-3xl font-bold text-center my-6 sm:my-10">
        المناظرات
      </h2>
      <div className="join flex justify-center my-16">
        <div className="indicator">
          <label className="input input-bordered flex items-center gap-2">
            <input 
              type="text" 
              className="grow" 
              placeholder="Search" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label>
        </div>
      </div>
      
      <div className="shawrma">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-28 my-0 mx-auto">
          {currentItems.map((title, index) => (
            <div className="wrapper" key={index}>
              <div
                className="card bg-base-100 w-full sm:w-[18rem] md:w-[24rem] lg:w-[28rem] shadow-xl border-2 transition-all"
                style={getGradientStyle("red", "black", "green")}
              >
                <figure className="p-6">
                  <img
                    src="https://www.iec.jo/sites/default/files/styles/d10_standard/public/images/2024-08/whatsapp_image_2024-08-13_at_6.14.18_pm.jpeg?h=09deafb6&itok=IKuP_Ech"
                    alt="Shoes"
                    className="rounded-xl w-full"
                  />
                </figure>
                <span
                  className="my-4 md:my-6 mx-auto inline-block w-full md:w-72 text-center rounded-[5px] py-0.5 text-xs font-medium leading-loose text-white"
                  style={{
                    backgroundColor: borderColors[index % borderColors.length],
                  }}
                >
                  Jan 05, 2023
                </span>
                <div className="card-body pt-2 md:pt-3 items-center text-center">
                  <h2
                    className="mb-2 md:mb-4 inline-block text-lg md:text-xl font-semibold"
                    style={{
                      color: borderColors[index % borderColors.length],
                    }}
                  >
                    {title}
                  </h2>
                  <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="card-actions">
                    <button
                      className="btn mt-2"
                      style={{
                        backgroundColor: borderColors[index % borderColors.length],
                        borderColor: borderColors[index % borderColors.length],
                        color: "white",
                      }}
                    >
                      شاهد الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="join my-6 mx-auto flex justify-center border-2 border-red-600 w-fit">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, i) => (
          <button 
            key={i + 1} 
            className={`join-item btn hover:bg-red-600 hover:text-white ${currentPage === i + 1 ? 'bg-red-600 text-white' : ''}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Debates;