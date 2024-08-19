// src/components/Overview.jsx

// import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'; // تأكد من المسار الصحيح
// import { BarChart, Users, Calendar } from 'lucide-react';
// import AdminDashboard from './AdminDashboard';
// const Overview = () => {
//   return (
//     <div className="container mx-auto p-4">
//         < AdminDashboard />
//       <h1 className="text-3xl font-bold mb-6">Overview</h1>
//       <div className="space-y-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Voter Participation</CardTitle>
//             <BarChart className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">75%</div>
//             <p className="text-xs text-muted-foreground">+5% from last election</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Voters</CardTitle>
//             <Users className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">10,482</div>
//             <p className="text-xs text-muted-foreground">+2% from last election</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Election Status</CardTitle>
//             <Calendar className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">Active</div>
//             <p className="text-xs text-muted-foreground">Ends in 3 days</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Overview;


// Overview.jsx new code 
// import CirclePercentage from '../components/CirclePercentage';
// import Card from '../components/Card';
// import VotingPercentage from '../components/VotingPercentage';
// // Jordanian flag colors
// import DistrictVotingPercentage from '../components/DistrictZA';

// const Overview = () => (
//   <div className="space-y-8">
//     <div className="flex justify-center">
  
//         <VotingPercentage />

  
//       {/* <CirclePercentage percentage={75} title="المشاركة الكلية" subtitle="نسبة الإقبال على التصويت" /> */}
//     </div>
//     <div className="flex justify-center space-x-8 rtl:space-x-reverse">
//  {/* استدعاء المكون مع اسم الدائرة التي ترغب في عرض النسبة الخاصة بها */}
//       <DistrictVotingPercentage districtName="ZA" />
//       <DistrictVotingPercentage districtName="A1" />
//       <DistrictVotingPercentage districtName="A2" />
//       <CirclePercentage percentage={65} title="المنطقة ب" subtitle="المناطق الضواحي" />
//       <CirclePercentage percentage={55} title="المنطقة ج" subtitle="المناطق الريفية" />
//     </div>
//     <div className="flex flex-col items-center space-y-4 mt-8">
//       <Card 
//         title="إجمالي الناخبين" 
//         value="10,482" 
//         subtitle="زيادة 2٪ عن الانتخابات السابقة"
//         icon={<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
//       />
//       <Card 
//         title="حالة الانتخابات" 
//         value="نشطة" 
//         subtitle="تنتهي خلال 3 أيام"
//         icon={<svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
//       />
//       <Card 
//         title="عدد المرشحين" 
//         value="24" 
//         subtitle="في جميع المناطق"
//         icon={<svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
//       />
//     </div>
//   </div>
// );

// export default Overview;


// Overview.jsx first-----------------------------------------------------------------
// import CirclePercentage from '../components/CirclePercentage';
// import Card from '../components/Card';
// import VotingPercentage from '../components/VotingPercentage';
// // Jordanian flag colors
// import DistrictVotingPercentage from '../components/DistrictZA';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Overview = () => {
//   // ملاحظة: المتغيرات الجديدة لإدارة البيانات القادمة من الـ Controller
//   const [totalVotes, setTotalVotes] = useState(0);
//   const [districtVotes, setDistrictVotes] = useState({});
  
//   useEffect(() => {
//     // استدعاء البيانات من الـ API
//     const fetchVotingData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/api/voting-data');
//         const { totalVotes, districtVotes } = response.data;
//         setTotalVotes(totalVotes);
//         setDistrictVotes(districtVotes);
//       } catch (error) {
//         console.error('Error fetching voting data:', error);
//       }
//     };
    
//     fetchVotingData();
//   }, []);

//   return (
//     <div className="space-y-8">
//       <div className="flex justify-center">
//         <VotingPercentage />
//       </div>
      
//       <div className="flex justify-center space-x-8 rtl:space-x-reverse">
//         {/* استدعاء المكون مع اسم الدائرة التي ترغب في عرض النسبة الخاصة بها */}
//         <DistrictVotingPercentage districtName="ZA" votes={districtVotes['ZA']} />
//         <DistrictVotingPercentage districtName="A1" votes={districtVotes['A1']} />
//         <DistrictVotingPercentage districtName="A2" votes={districtVotes['A2']} />
//         <CirclePercentage percentage={65} title="المنطقة ب" subtitle="المناطق الضواحي" />
//         <CirclePercentage percentage={55} title="المنطقة ج" subtitle="المناطق الريفية" />
//       </div>
      
//       <div className="flex flex-col items-center space-y-4 mt-8">
//         <Card 
//           title="إجمالي الناخبين" 
//           value={totalVotes} 
//           subtitle="زيادة 2٪ عن الانتخابات السابقة"
//           icon={
//             <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           }
//         />
//         <Card 
//           title="حالة الانتخابات" 
//           value="نشطة" 
//           subtitle="تنتهي خلال 3 أيام"
//           icon={
//             <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           }
//         />
//         <Card 
//           title="عدد المرشحين" 
//           value="24" 
//           subtitle="في جميع المناطق"
//           icon={
//             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Overview;
//--------------------------------------------------------------------------------------
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import VotingStats from '../components/VotingStats';
// // import CirclePercentage from '../components/CirclePercentage';
// import Card from '../components/Card';
// import VotingPercentage from '../components/VotingPercentage';// نسب الحربيه 
// import DistrictVotingPercentage from '../components/DistrictZA'; // نسب المحليه 
// import Candidatemembers from '../components/CandidateCount'; // استدعاء المكون

// const Overview = () => {
//   // const [totalVotes, setTotalVotes] = useState(0);
//   const [districtVotes, setDistrictVotes] = useState({});
//   const [votingStats, setVotingStats] = useState({ localVoteCount: 0, partyVoteCount: 0 });
//   const [candidate,setcandidate] = useState ({});
//   useEffect(() => {
//     const fetchVotingData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/api/voting-data');
//         // const { totalVotes, districtVotes } = response.data;
//         const { districtVotes } = response.data;
//         // setTotalVotes(totalVotes);
//         setDistrictVotes(districtVotes);
//       } catch (error) {
//         console.error('Error fetching voting data:', error);
//       }
//     };

//     const fetchVotingStats = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/test/votingstats');
//         const { localVoteCount, partyVoteCount } = response.data;
//         setVotingStats({ localVoteCount, partyVoteCount });
//       } catch (error) {
//         console.error('Error fetching voting stats:', error);
//       }
//     };

//     const featchcandidatenum = async () => {
//       try{
//         const response =await axios.get('http://localhost:4026/test/candidate');
//         const {isCandidate} = response.data;
//         setcandidate({isCandidate})
//       }catch (error) {
//         console.error('Error fetching voting stats:', error);
//       }
//     };

//     fetchVotingData();
//     fetchVotingStats();
//     featchcandidatenum ();
//   }, []);

//   return (
//     <div className="space-y-8">
//       <div className="flex justify-center">
//         <VotingPercentage />
//       </div>

//       <div className="flex justify-center space-x-8 rtl:space-x-reverse">
//         <DistrictVotingPercentage districtName="ZA" votes={districtVotes['ZA']} />
//         <DistrictVotingPercentage districtName="A1" votes={districtVotes['A1']} />
//         <DistrictVotingPercentage districtName="A2" votes={districtVotes['A2']} />
//         {/* <CirclePercentage percentage={65} title="المنطقة ب" subtitle="المناطق الضواحي" />
//         <CirclePercentage percentage={55} title="المنطقة ج" subtitle="المناطق الريفية" /> */}
//       </div>
//        {/* لحساب المقترعين مليين وحزبيين  */}
//       <div className="flex flex-col items-center space-y-4 mt-8">
//         <VotingStats localVoteCount={votingStats.localVoteCount} partyVoteCount={votingStats.partyVoteCount} />
// {/* لحساب عدد المرشحين  */}
// {/* <div className="flex flex-col items-center space-y-4 mt-8">
// <candidate localVoteCount={candidate.localVoteCount} partyVoteCount={votingStats.partyVoteCount} /> */}
//         {/* <Card 
//           title="إجمالي الناخبين" 
//           // value={totalVotes} 
//           subtitle="زيادة 2٪ عن الانتخابات السابقة"
//           icon={
//             <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//           }
//         /> */}
//         <Card 
//           title="حالة الانتخابات" 
//           value="نشطة" 
//           subtitle="تنتهي خلال 3 أيام"
//           icon={
//             <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           }
//         />
//         <Card 
//           title="عدد المرشحين" 
//           value="24" 
//           subtitle="في جميع المناطق"
//           icon={
//             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default Overview;
//-----------------------------------------------------------------------------------------------------
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import VotingStats from '../components/VotingStats';
// // import CirclePercentage from '../components/CirclePercentage';
// import Card from '../components/Card';
// import VotingPercentage from '../components/VotingPercentage';// نسب الحربيه 
// import DistrictVotingPercentage from '../components/DistrictZA'; // نسب المحليه 
// import Candidatemembers from '../components/CandidateCount'; // استدعاء المكون

// const Overview = () => {
//   const [districtVotes, setDistrictVotes] = useState({});
//   const [votingStats, setVotingStats] = useState({ localVoteCount: 0, partyVoteCount: 0 });
//   const [candidateCount, setCandidateCount] = useState(0);

//   useEffect(() => {
//     const fetchVotingData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/api/voting-data');
//         const { districtVotes } = response.data;
//         setDistrictVotes(districtVotes);
//       } catch (error) {
//         console.error('Error fetching voting data:', error);
//       }
//     };

//     const fetchVotingStats = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/test/votingstats');
//         const { localVoteCount, partyVoteCount } = response.data;
//         setVotingStats({ localVoteCount, partyVoteCount });
//       } catch (error) {
//         console.error('Error fetching voting stats:', error);
//       }
//     };

//     const fetchCandidateCount = async () => {
//       try {
//         const response = await axios.get('http://localhost:4026/test/candidate');
//         console.log('Candidate Count Data:', response.data);
//         const { isCandidate } = response.data;
//         setCandidateCount(isCandidate);
//       } catch (error) {
//         console.error('Error fetching candidate stats:', error);
//       }
//     };

//     fetchVotingData();
//     fetchVotingStats();
//     fetchCandidateCount();
//   }, []);

//   return (
//     <div className="space-y-8">
//       <div className="flex justify-center">
//         <VotingPercentage /> 
//       </div>

//       <div className="flex justify-center space-x-8 rtl:space-x-reverse">
//         <DistrictVotingPercentage districtName="ZA" votes={districtVotes['ZA']} />
//         <DistrictVotingPercentage districtName="A1" votes={districtVotes['A1']} />
//         <DistrictVotingPercentage districtName="A2" votes={districtVotes['A2']} />
//       </div>
      
//       <div className="flex flex-col items-center space-y-4 mt-8">
//         <VotingStats localVoteCount={votingStats.localVoteCount} partyVoteCount={votingStats.partyVoteCount} />


//         <div className="flex flex-col items-center space-y-4 mt-8">
//         < Candidatemembers  /> {/* استدعاء مكون عرض عدد المرشحين هنا */}
//       </div>
//         {/* Card لعرض عدد المرشحين */}
//         {/* <Card 
//       title="حالة الانتخابات" 
//       value="نشطة" 
//       subtitle="تنتهي خلال 3 أيام"
//       icon={
//         <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//       }
//       customContent={<VotingPercentage />} // تمرير المكون هنا
//     /> */}
//         {/* <Card 
//           title="عدد المرشحين" 
//           value={candidateCount} 
//           subtitle="في جميع المناطق"
//           icon={
//             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//             </svg>
//           }
//         /> */}

//         {/* <Card 
//           title="حالة الانتخابات" 
//           value="نشطة" 
//           subtitle="تنتهي خلال 3 أيام"
//           icon={
//             <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//           }
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default Overview;
//-----------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------
import { useState, useEffect } from 'react';
import axios from 'axios';
import VotingStats from '../components/VotingStats';
import Card from '../components/Card';
import VotingPercentage from '../components/VotingPercentage';
import DistrictVotingPercentage from '../components/DistrictZA';
import Candidatemembers from '../components/CandidateCount'; // استدعاء المكون

const Overview = () => {
  const [districtVotes, setDistrictVotes] = useState({});
  const [votingStats, setVotingStats] = useState({ localVoteCount: 0, partyVoteCount: 0 });

  useEffect(() => {
    const fetchVotingData = async () => {
      try {
        const response = await axios.get('http://localhost:4026/api/voting-data');
        const { districtVotes } = response.data;
        setDistrictVotes(districtVotes);
      } catch (error) {
        console.error('Error fetching voting data:', error);
      }
    };

    const fetchVotingStats = async () => {
      try {
        const response = await axios.get('http://localhost:4026/test/votingstats');
        const { localVoteCount, partyVoteCount } = response.data;
        setVotingStats({ localVoteCount, partyVoteCount });
      } catch (error) {
        console.error('Error fetching voting stats:', error);
      }
    };

    fetchVotingData();
    fetchVotingStats();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <VotingPercentage />
      </div>
      {/* test---------------------- */}
      <div className="p-4">
      {/* <Card
        title="حالة الانتخابات"
        value="نشطة"
        subtitle="تنتهي خلال 3 أيام"
        icon={
          <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        }
      >
        <VotingPercentage />
      </Card> */}
    </div>
    {/* //----------------------------- */} 

      <div className="flex justify-center space-x-8 rtl:space-x-reverse">
        <DistrictVotingPercentage districtName="ZA" votes={districtVotes['ZA']} />
        <DistrictVotingPercentage districtName="A1" votes={districtVotes['A1']} />
        <DistrictVotingPercentage districtName="A2" votes={districtVotes['A2']} />
<<<<<<< HEAD
       
=======
>>>>>>> 8878683407942b887a8a606a8f1bbc7710f8f842
      </div>
      
      <div className="flex flex-col items-center space-y-4 mt-8">
        <VotingStats localVoteCount={votingStats.localVoteCount} partyVoteCount={votingStats.partyVoteCount} />

        <div className="flex flex-col items-center space-y-4 mt-8">
          <Candidatemembers /> {/* استدعاء مكون عرض عدد المرشحين هنا */}
        </div>
{/* 
        <Card 
          title="حالة الانتخابات" 
          value="نشطة" 
          subtitle="تنتهي خلال 3 أيام"
          icon={
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        /> */}
      </div>
    </div>
  );
};

export default Overview;
