import React from "react";
import { useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import Counter from "../components/Counter";
import VotingPercentagesM from "../components/VotingPercentageM";
import Hero from "../components/Hero";
import Debates from "./Debates";
import StudyComponent from "../components/iframe";
import Faq from "../components/FAQ";
import DidYouKnow from "../components/DidUKnow";
import Advertisment from "../components/Advertisment";
// import VotingStats from '../components/VotingStats';
// import CirclePercentage from '../components/CirclePercentage';
// import Card from '../components/Card';


function Home() {
  const [districtVotes, setDistrictVotes] = useState({});

  return (
    <>
      {/* <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://cdn4.premiumread.com/?url=https://alrai.com/alraijordan/uploads/images/2024/05/21/553158.jpeg&w=870&q=100&f=jpg?t=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> صوتك </h1>
            <p className="mb-5">"صوتك... مستقبل الأردن يبدأ هنا"</p>
            h2
            <button className="btn bg-red-600 border-red-500 text-white">
              صوت الآن
            </button>
          </div>
        </div>
      </div> */}
      <Hero />
      <Counter />
      <VotingPercentagesM />
      
      <Advertisment />
      <Faq />

      <DidYouKnow />

      <Advertisment />
    </>
  );
}

export default Home;
