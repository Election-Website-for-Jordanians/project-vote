import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CategoriesListing() {
  const navigate = useNavigate();

  const handleLocalListingClick = async () => {
    try {
      // Get the national ID from somewhere (e.g., state, props, local storage)
      const nationalID = localStorage.getItem("nationalID");
      console.log("debug:", nationalID);
      if (!nationalID) {
        // Handle case where nationalID is not available
        console.error("National ID not found");
        return;
      }

      // Make an API request to check the district
      const response = await axios.post(
        "http://localhost:4026/api/district/check-id",
        {
          nationalID,
        }
      );
      console.log(response.data);
      const district = response.data.district;
      console.log(district);
      if (district === "ZA") {
        // If district is ZA, navigate to GovernorateAndDistrict
        navigate("/components/votingPages/GovernorateAndDistrict");
      } else if (district === "A1") {
        // If district is A1, navigate to GovernorateAndDistrict1
        navigate("/components/votingPages/GovernorateAndDistrict1");
      } else if (district === "A2") {
        // If district is A2, navigate to GovernorateAndDistrict2
        navigate("/components/votingPages/GovernorateAndDistrict2");
      } else {
        // Handle case where district is neither ZA, A1, nor A2
        alert("You are not allowed to access this page.");
      }
    } catch (error) {
      console.error("Error checking district:", error);
    }
  };

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 ">
        <div className="row-start-1 row-end-3 col-start-1 col-end-2">
          <p
            onClick={handleLocalListingClick}
            className="mt-48 border-solid border-4 p-2 w-96 h-16 flex justify-center items-center mr-52 font-bold cursor-pointer"
          >
            القوائم المحلية
            <br />
          </p>
          <br />
          <p className="border-solid border-4 p-2 w-96 h-16 flex justify-center items-center mr-52 mt-10 font-bold">
            القوائم الحزبية
            <br />
          </p>
        </div>
        <div className="row-start-1 row-end-3 col-start-2 col-end-3 mt-40 mr-28 w-full">
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0C4bk_R6Ga49JiNPxgn6-1LrTyxLcQ8tIDHP8ZoAMt6oxPki_0f1sPb2APKy1Sifhc0&usqp=CAU"
          />
        </div>
      </div>
    </>
  );
}

export default CategoriesListing;
