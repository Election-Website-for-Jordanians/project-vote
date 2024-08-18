import { Link } from "react-router-dom";

function CheckOutCandidate(){


    return(
<main className=" mt-40 flex justify-center items-center dark:bg-gray-900">
  <div className="max-w-7xl dark:bg-gray-950 dark:text-white">
    <form className=" w-full p-4 rounded shadow-md" action="/submit-comment" method="post">
      <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200 text-center">طلب إعلان انتخابي </h2>
      <p className="text-gray-600 mb-4 text-center">املأ النموذج أدناه لتقديم طلب إعلان انتخابي. سيتم مراجعة طلبك وإعلامك بمجرد نشر الإعلان</p>
{/**************************************************** */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/************************** */}
   
        <div className="mb-4 ">
          <input
        type="file"
        id="email"
        name="email"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        required
      />
        </div>
{/************************** */}
{/************************** */}

        <div className="mb-4">
          <input
        type="text"
        id="website"
        name="website"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed text-end"
        placeholder="الاسم"
      />
        </div>
{/************************** */}
{/************************** */}
<div className="mb-4 ">
          <input
        type="number"
        id="name"
        name="name"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed text-end"
        placeholder="الرقم الوطني*"
        required
      />
        </div>
{/************************** */}

{/************************** */}

        <div className="mb-4 col-span-1 md:col-span-3">
          <textarea
        id="comment"
        name="comment"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none text-end"
        placeholder="ادعم صوتك*"
        rows="5"

        required
      ></textarea>
        </div>
{/************************** */}
      

    </div>


{/**************************************************** */}


      <div className="flex justify-end">
        <Link to="/CandidatePayment">
        <button
        type="submit"
        className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
      >
        معلومات الدفع →
      </button>
      </Link>
      </div>
    </form>
  </div>
</main>

    );

}

export default CheckOutCandidate;