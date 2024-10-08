import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Advertisment() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows on very small screens
        },
      },
    ],
  };

  const getGradientStyle = (color1, color2, color3) => ({
    borderImage: `linear-gradient(to bottom, ${color1}, ${color2}, ${color3}) 1 / 4px`,
    borderImageSlice: 1,
  });

  const borderColors = ["red", "black", "green"];

  return (
    <section className="bg-white pb-10 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-center items-center">
          <div className="w-full ">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center flex flex-col">
              <h2
                className="title relative text-2xl md:text-3xl font-bold text-center before after my-8 mx-4 md:my-10 md:mx-6"
                style={{ color: borderColors[0] }}
              >
                أبرز الحملات الانتخابية
              </h2>
              <p className="text-lg md:text-xl text-gray-500">
                شاهد جهود أبرز المرشحين
              </p>
            </div>
          </div>
          <button className="mb-8 md:mb-10 w-full md:w-80 btn btn-outline btn-error self-end">
            مشاهدة جميع الحملات
          </button>
        </div>

        <Slider className="flex justify-center gap-10 md:gap-4" {...settings}>
          {["دائرة الزرقاء", "دائرة الزرقاء", "دائرة الزرقاء"].map(
            (title, index) => (
              <div className="wrapper mx-8" key={index}>
                <div
                  className="card  bg-base-100 w-full sm:w-[18rem] md:w-[24rem] lg:w-[28rem] shadow-xl border-2 transition-all"
                  style={getGradientStyle("red", "black", "green")}
                >
                  <figure className=" p-6 pr-12">
                    <img
                      src="https://www.iec.jo/sites/default/files/styles/d10_standard/public/images/2024-08/whatsapp_image_2024-08-13_at_6.14.18_pm.jpeg?h=09deafb6&itok=IKuP_Ech"
                      alt="Shoes"
                      className="rounded-xl w-full"
                    />
                  </figure>
                  <span
                    className="my-4 md:my-6 mx-auto inline-block w-full md:w-72 text-center rounded-[5px] py-0.5 text-xs font-medium leading-loose text-white"
                    style={{
                      backgroundColor:
                        borderColors[index % borderColors.length],
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
                          backgroundColor:
                            borderColors[index % borderColors.length],
                          borderColor:
                            borderColors[index % borderColors.length],
                          color: "white",
                        }}
                      >
                        شاهد الآن
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
}

export default Advertisment;
