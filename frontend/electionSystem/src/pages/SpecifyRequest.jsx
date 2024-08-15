import { Link } from "react-router-dom";
import Cards from "../assets/images/cards.jpg";
// import debates from "../assets/image/debates.jpg";
// import flag from "../assets/images/footer.png";


function SpecifyRequest(){

    return(
        <div>


        <div className="flex flex-wrap justify-center gap-10 my-20 space-x-10">

<Link to="/CheckOutCandidate">

<div
  className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 py-40">
  <div
    className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(${Cards})] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
احصل على فرصة للتعبير عن آرائك! قدم طلبك للمشاركة في المناظرات 
    </h2>
   
    {/* <img alt="Tania Andrew"
      src={debates}
      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /> */}
  </div>
</div> 
</Link>



<Link to="/CheckOutCandidate">

<div
  className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 py-40">
  <div
    className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(${Cards})] bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    قم بتقديم طلبك الآن لنشر إعلانك وحقق أقصى استفادة من وصولك إلى الجمهور المستهدف!  
      </h2>
    
    
    {/* <img alt="Tania Andrew"
      src={debates}
      className="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" /> */}
  </div>
</div> 
</Link>

        </div>
{/* <div className="w-full">
  <img src={flag} alt="" />
</div> */}
        </div>

    );

}

export default SpecifyRequest;