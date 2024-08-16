import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import footer from "../assets/images/footer.png";

// import lineForm from "../assets/images/lineForm.png";


function CheckOutCandidate(){
  const [title, setTitle] = useState('');
  // const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  /**************image************ */
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
/******************image************** */
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
      <div className="min-h-screen bg-gray-100 font-amiri rtl">
  <div className="absolute inset-0 z-0 bg-repeat opacity-10" style={{backgroundImage: `url('${footer}')`}}></div>
  
  <main className="relative flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-4xl space-y-8">
      <div className="text-center">
        <h2 className="mt-6 text-4xl font-extrabold text-[#CE1126]">
          طلب إعلان انتخابي
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          املأ النموذج أدناه لتقديم طلب إعلان انتخابي. سيتم مراجعة طلبك وإعلامك بمجرد نشر الإعلان
        </p>
      </div>

      {/* <div className="h-8 bg-repeat-x bg-contain" style={{backgroundImage: `url('${lineForm}')`}}></div> */}

      <form className="mt-8 space-y-6 bg-white shadow-2xl rounded-lg px-10 py-8 border-2 border-[#CE1126] text-end" onSubmit={handleAddTask}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-6">
          <div>
              <label htmlFor="number" className="block mb-1 text-sm font-medium text-gray-700">الرقم الوطني</label>
              <input
                type="number"
                id="number"
                name="number"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#007A3D] focus:border-[#007A3D] focus:z-10 sm:text-sm text-end"
                placeholder="أدخل رقمك الوطني"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">الاسم</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#007A3D] focus:border-[#007A3D] focus:z-10 sm:text-sm text-end"
                placeholder="أدخل اسمك الكامل"
              />
            </div>
           
            <div>
              <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-700">ادعم صوتك</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                rows="5"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#007A3D] focus:border-[#007A3D] focus:z-10 sm:text-sm text-end"
                placeholder="اكتب رسالتك هنا"
                required
              ></textarea>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="picture" className="block mb-1 text-sm font-medium text-gray-700">الصورة الشخصية</label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={handleImageChange}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#007A3D] focus:border-[#007A3D] focus:z-10 sm:text-sm text-end"
              />
            </div>
            {selectedImage && (
              <div className="mt-4">
                <img src={selectedImage} alt="الصورة المختارة" className="h-56 max-w-full rounded-md shadow-md w-96" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <Link to="/CandidatePayment">
          
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#CE1126] hover:bg-[#A50E1F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007A3D] transition duration-150 ease-in-out"
          >
            معلومات الدفع →
          </button>
          </Link>
        </div>
      </form>

      {/* <div className="h-8 bg-repeat-x bg-contain" style={{backgroundImage: `url('${lineForm}')`}}></div> */}
    </div>
  </main>
</div>
    );

}

export default CheckOutCandidate;