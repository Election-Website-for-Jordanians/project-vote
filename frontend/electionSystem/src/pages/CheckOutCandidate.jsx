// import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CheckOutCandidate(){
  const [title, setTitle] = useState('');
  // const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');

  


  const handleAddTask = async (e) => {
   e.preventDefault();
 
   const token = localStorage.getItem('token');
   if (!token) {
     alert('No token found');
     return;
   }
 
   try {
     // Validate token and get user ID from server
     const response = await axios.post('http://localhost:4026/api/advertising/validate-token', { token });
     const advertisorID = response.data.nationalID;
 
     // Proceed to add the task
     await axios.post('http://localhost:4026/api/advertising/RequestAdvertisement', {  title, advertisorID, description });
     alert('Added Advertisement successfully');
   } catch (error) {
     console.error('Add Advertisement failed:', error);
     alert('Added Advertisement failed!');
   }
 };


    return(
<main className="flex items-center justify-center mt-40 dark:bg-gray-900">
  <div className="max-w-7xl dark:bg-gray-950 dark:text-white">
    <form className="w-full p-4 rounded shadow-md " action="" method="post" onSubmit={handleAddTask}>
      <h2 className="mb-4 text-xl tracking-wider text-center text-gray-900 font-lighter dark:text-gray-200">طلب إعلان انتخابي </h2>
      <p className="mb-4 text-center text-gray-600">املأ النموذج أدناه لتقديم طلب إعلان انتخابي. سيتم مراجعة طلبك وإعلامك بمجرد نشر الإعلان</p>
{/**************************************************** */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/************************** */}
   
        <div className="mb-4 ">
          <input
          
        type="file"
        id="pictuer"
        name="pictuer"
        className="w-full px-3 py-2 border border-gray-300 border-solid rounded-sm dark:bg-gray-900 dark:border-none focus:outline-none focus:border-dashed"
      />
        </div>
{/************************** */}
{/************************** */}

        <div className="mb-4">
          <input
             value={title} 
             onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-2 border border-gray-300 border-solid rounded-sm dark:bg-gray-900 dark:border-none focus:outline-none focus:border-dashed text-end"
        placeholder="الاسم"
      />
        </div>
{/************************** */}
{/************************** */}
<div className="mb-4 ">
          <input
             
        type="number"
        id="number"
        name="number"
        className="w-full px-3 py-2 border border-gray-300 border-solid rounded-sm dark:bg-gray-900 dark:border-none focus:outline-none focus:border-dashed text-end"
        placeholder="الرقم الوطني*"
        
      />
        </div>
{/************************** */}

{/************************** */}

        <div className="col-span-1 mb-4 md:col-span-3">
          <textarea
           value={description} 
           onChange={(e) => setDescription(e.target.value)}
        id="description"
        name="description"
        className="w-full px-3 py-2 border border-gray-300 border-solid rounded-sm resize-none dark:bg-gray-900 dark:border-none focus:outline-none focus:border-dashed text-end"
        placeholder="ادعم صوتك*"
        rows="5"

        required
      ></textarea>
        </div>
{/************************** */}
      

    </div>


{/**************************************************** */}


      <div className="flex justify-end">
        {/* <Link to="/CandidatePayment"> */}
        <button
        type="submit"
        className="px-6 py-4 text-white rounded-sm bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
      >
        معلومات الدفع →
      </button>
      {/* </Link> */}
      </div>
    </form>
  </div>
</main>

    );

}

export default CheckOutCandidate;