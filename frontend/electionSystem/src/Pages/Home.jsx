import React from "react";
import Counter from "../Components/Counter";
import VotingPercentage from "../Components/VotingPercentageM";
import Hero from "../Components/Hero";
import StudyComponent from "../Components/iframe";
import Faq from "../Components/FAQ";
import DidYouKnow from "../Components/DidUKnow";
import Advertisment from "../Components/Advertisment";
function Home() {
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
      <VotingPercentage />
      <Advertisment />
      <Faq />

      <DidYouKnow />

      <Advertisment />
    </>
  );
}

export default Home;
