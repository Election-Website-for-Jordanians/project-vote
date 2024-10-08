//
import React, { useState, useEffect } from "react";
import imageSrc1 from "../assets/download 3.jpeg";
import imageSrc2 from "../assets/download 2.png";
import imageSrc3 from "../assets/download 4.jpeg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const images = [imageSrc1, imageSrc2, imageSrc3];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Duration of the fade-out effect
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[35rem]">
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Slideshow"
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-8 md:px-12">
        <h2 className="text-6xl font-semibold text-white md:text-4xl">
          مرحباً بك , <span className="text-red-600">محمد.</span>
        </h2>
        <p className="mt-2  text-white md:text-base text-xl">
          "صوتك... مستقبل الأردن يبدأ هنا" بصوتك تصنع القرار و تنهض بالأردن
        </p>
        <div className="mt-6">
          <button className="bg-red-500 px-5 py-3 rounded-xl text-sm text-center text-white hover:text-white shadow-xl hover:shadow-xl hover:shadow-red-300/80 shadow-red-400/40 hover:bg-red-600">
            صوت الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
