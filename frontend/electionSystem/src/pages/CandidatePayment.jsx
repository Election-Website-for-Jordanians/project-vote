import { useState } from "react";

function CandidatePayment() {
  // card
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expired, setExpired] = useState({ month: "", year: "" });
  const [securityCode, setSecurityCode] = useState("");
  const [card, setCard] = useState("front");

  const formatCardNumber = (value) => {
    return value
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  //   const isValid = () => {
  //     return cardholder.length >= 5 &&
  //       cardNumber !== '' &&
  //       expired.month !== '' &&
  //       expired.year !== '' &&
  //       securityCode.length === 3;
  //   };

  //   const handleSubmit = () => {
  //     alert(`You did it ${cardholder}.`);
  //   };
  //end card
  //from and card

  //end form and card
  return (
    <div>
      <h1 className="mt-10 text-5xl font-semibold text-center">عملية الدفع</h1>
      {/************info********** */}
      <div
        key="1"
        className="text-center 2xl:container 2xl:mx-auto md:py-12 py-9"
      >
        <div className="grid grid-cols-1 px-4 py-10 lg:grid-cols-4 md:grid-cols-2 bg-gray-50 dark:bg-gray-800 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 md:px-12">
          {/* قسم الدفع */}
          <div className="flex items-center justify-center col-span-1 lg:col-span-4">
            <div className="flex flex-col items-center">
              <svg
                className="text-gray-600 dark:text-white"
                fill="none"
                height="32"
                viewBox="0 0 32 32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <h3 className="mt-8 text-xl font-semibold leading-5 text-gray-800 dark:text-white lg:mt-10">
                دفع آمن للإعلانات
              </h3>
              <p className="w-full mt-4 text-base font-normal leading-6 text-gray-600 dark:text-gray-300 lg:w-full md:w-9/12">
                نقدم عملية دفع آمنة لضمان حماية بياناتك أثناء دفع رسوم الإعلان.
                يتم استخدام التشفير من البداية إلى النهاية لضمان أمان المعلومات
                الشخصية وبيانات الدفع.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*********end info********* */}

      <div className="flex flex-wrap justify-center m-4 mt-10 ">
        <div className="w-full max-w-md bg-white shadow-lg credit-card rounded-xl">
          {/*****************payment************* */}
          <div className="mb-4 px-5 py-10 md:px-10">
            {/********************** Card *************************** */}
            <header className="flex flex-col items-center p-4 ">
              <div
                className={`relative ${card === "front" ? "block" : "hidden"}`}
              >
                <img
                  alt="front credit card"
                  className="w-full h-auto"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                />
                <div className="absolute left-0 w-full px-6 py-4 text-lg text-white bg-transparent bottom-12">
                  <p className="mb-4 text-xl">
                    {cardNumber !== ""
                      ? formatCardNumber(cardNumber)
                      : "0000 0000 0000 0000"}
                  </p>
                  <div className="flex justify-between">
                    <p>{cardholder !== "" ? cardholder : "Card holder"}</p>
                    <div>
                      <span>{expired.month}</span>
                      <span>{expired.month !== "" && "/"}</span>
                      <span>{expired.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`relative ${card === "back" ? "block" : "hidden"}`}
              >
                <img
                  alt="back credit card"
                  className="w-full h-auto"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                />
                <div className="absolute right-0 flex justify-end w-full px-6 py-4 text-xl text-white bg-transparent bottom-20">
                  <div className="flex items-center justify-center w-16 border border-white h-9">
                    <p>{securityCode !== "" ? securityCode : "code"}</p>
                  </div>
                </div>
              </div>
              <ul className="flex mt-4 space-x-4">
                <li>
                  <img
                    alt="computop"
                    className="w-16"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                  />
                </li>
                <li>
                  <img
                    alt="verified by visa"
                    className="w-14"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                  />
                </li>
                <li>
                  <img
                    alt="mastercard"
                    className="w-7"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                  />
                </li>
              </ul>
            </header>
            {/********************** End Card *************************** */}

            <main className="p-4 mt-4">
              <h1 className="text-xl font-semibold text-center text-gray-700">
                بطاقه ائتمان
              </h1>
              <div className="mt-4 text-right">
                <div className="my-3">
                  <input
                    className="block w-full px-5 py-2 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                    maxLength="22"
                    placeholder="حامل البطاقة"
                    type="text"
                    value={cardholder}
                    onChange={(e) => setCardholder(e.target.value)}
                  />
                </div>
                <div className="my-3">
                  <input
                    className="block w-full px-5 py-2 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                    maxLength="19"
                    placeholder="رقم البطاقة"
                    type="text"
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(formatCardNumber(e.target.value))
                    }
                    onBlur={() => setCardNumber(formatCardNumber(cardNumber))}
                  />
                </div>
                <div className="my-3">
                  <label className="block mb-2 text-gray-700">
                    منتهي الصلاحية
                  </label>
                  <div className="flex space-x-2">
                    <select
                      className="block w-1/2 px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg appearance-none focus:ring focus:outline-none"
                      value={expired.year}
                      onChange={(e) =>
                        setExpired({ ...expired, year: e.target.value })
                      }
                    >
                      <option disabled value="">
                        YY
                      </option>
                      {Array.from({ length: 7 }, (_, i) => 2021 + i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        )
                      )}
                    </select>

                    <select
                      className="block w-1/2 px-5 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg appearance-none focus:ring focus:outline-none"
                      value={expired.month}
                      onChange={(e) =>
                        setExpired({ ...expired, month: e.target.value })
                      }
                    >
                      <option disabled value="">
                        MM
                      </option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (month) => (
                          <option
                            key={month}
                            value={month.toString().padStart(2, "0")}
                          >
                            {month.toString().padStart(2, "0")}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <input
                    className="block w-full px-5 py-2 mt-3 text-right text-gray-700 placeholder-gray-400 bg-white border rounded-lg shadow-lg focus:ring focus:outline-none"
                    maxLength="3"
                    placeholder="رمز الحماية"
                    type="text"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    onBlur={() => setCard("front")}
                    onFocus={() => setCard("back")}
                  />
                </div>
              </div>
            </main>

            <footer className="p-4 mt-6">
              <button className="w-full px-4 py-3 text-lg font-semibold text-white transition-colors rounded-sm bg-blue-950  hover:bg-cyan-600 focus:ring focus:outline-none">
                ادفع الان
              </button>
            </footer>
          </div>
          {/*****************end payment************* */}
        </div>
      </div>
    </div>
  );
}

export default CandidatePayment;
