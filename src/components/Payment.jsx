import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";

import { IoIosPaper } from "react-icons/io";

function Payment() {
  const [premium, setPremium] = useState("2,699");

  const [label, setLabel] = useState("Premium");
  let color = "red-500";

  const [premiumPlus, setPremiumPlus] = useState("4,599");
  const [platinum, setPlatinum] = useState("5,899");

  const [premiumsLink, setPremiumsLink] = useState(
    "https://buy.stripe.com/00g4gs7ke7vN3AIbIK"
  );

  const [plusLink, setPlusLink] = useState(
    "https://buy.stripe.com/fZe3codIC8zR6MUfZ2"
  );

  const [platinumLink, setPlatinumLink] = useState(
    "https://buy.stripe.com/dR65kw8oi4jB4EMcMP"
  );

  const [preLink, setPreLink] = useState("");

  const [premiumFinal, setPremiumFinal] = useState("3,200");

  const [premiumPlusFinal, setPremiumPlusFinal] = useState("5,500");
  const [platinumFinal, setPlatinumFinal] = useState("7,100");

  const [isPremiumPlusClicked, setIsPremiumPlusClicked] = useState(false);
  const [isPlatinum, setIsPlatinumClicked] = useState(false);
  const [isPremium, setIsPremiumClicked] = useState(true);

  const handleIsPlusClicked = () => {
    setIsPremiumPlusClicked(true);
    setIsPlatinumClicked(false);
    setIsPremiumClicked(false);
    setPremium(premiumPlus);
    setPremiumFinal(premiumPlusFinal);
    setLabel("Premium Plus");
    setPremiumsLink("https://buy.stripe.com/fZe3codIC8zR6MUfZ2");
  };

  const handleIsPlatinumClicked = () => {
    setIsPlatinumClicked(true);
    setIsPremiumPlusClicked(false);
    setIsPremiumClicked(false);
    setPremium(platinum);
    setPremiumFinal(platinumFinal);
    setLabel("Platinum");
    setPremiumsLink("https://buy.stripe.com/dR65kw8oi4jB4EMcMP");
  };
  const handleIsPremiumClicked = () => {
    setIsPremiumClicked(true);
    setIsPlatinumClicked(false);
    setIsPremiumPlusClicked(false);

    setPremium("2,699");
    setPremiumFinal("3,200");
    setLabel("Premium");
  };

  return (
    <div className=" bg-gray-200 w-full min-h-screen h-auto">
      <Navbar />
      {/* basic */}
      <div className=" my-10 flex flex-col gap-20 px-5 md:px-10 py-10">
        <div className=" flex w-full justify-center">
          <div className=" flex flex-col items-center gap-2 text-center">
            <h1 className=" text-3xl font-semibold">Pick your perfect plan</h1>
            <h1 className=" text-gray-500 w-full md:w-[500px]">
              Choose the best membership plan from the below options
            </h1>
            <a href="https://buy.stripe.com/5kA14g33Y5nFb3a7sx">
              <div className=" w-64 h-14 mt-5 flex items-center justify-center bg-blue-800 font-semibold text-white rounded-md animate-pulse hover:animate-none cursor-pointer">
                <h1 className=" flex items-center gap-2">
                  Membership Application <IoIosPaper />
                </h1>
              </div>
            </a>
          </div>
        </div>
        <div className=" md:flex md:gap-0 items-center w-full justify-center">
          <div className="w-full my-3 md:my-0 md:w-[400px] h-auto bg-gray-100 shadow-md rounded-xl border border-gray-300 py-10 px-10 flex flex-col gap-10">
            <div className=" flex flex-col w-full items-center gap-1 text-center">
              <h1 className=" text-3xl font-bold text-blue-600">Basic</h1>
              <h1 className=" text-xs text-gray-500">
                Everything you need to get stared,
              </h1>
              <hr className=" border-gray-400 w-full mt-3" />
            </div>
            <div className=" ">
              <div className=" flex flex-col gap-5 items-center">
                <h1 className="   text-center">
                  <span className="font-semibold text-black text-2xl">
                    Membership Fee :{" "}
                    <span className=" text-red-700">£1,399 </span>
                  </span>
                  <br />
                </h1>

                <h1 className=" text-sm ">
                  <span className=" font-medium">Final price : </span> £1,700{" "}
                  <span className=" text-xs">(Including VAT & conversion)</span>
                </h1>
              </div>
              <hr className=" w-full mt-10 border-gray-400" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">Validity: 1 year</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Ideal for single course
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Limited course availability
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 l">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">Limited learners</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Charge for extra learner
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">Curriculum support</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  No membership amendments
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">Certificate fee</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">Board dominant</h1>
              </div>
            </div>
            <div className=" w-full flex justify-center">
              <a href="https://buy.stripe.com/28o9AM5c65nF6MU6oo">
                <div
                  className=" w-40 h-12 flex items-center justify-center bg-blue-600 rounded-3xl cursor-pointer hover:w-44 hover:h-14 hover:bg-red-600"
                  style={{ transitionDuration: "0.2s" }}
                >
                  <h1 className=" text-white text-sm">Choose basic</h1>
                </div>
              </a>
            </div>
          </div>

          {/* premium */}
          <div className="w-full my-3 md:my-0 md:w-[400px] h-auto bg-gray-100 shadow-md rounded-xl border-2 border-black   flex flex-col gap-10">
            <div className=" w-full h-10 bg-black flex items-center rounded-t-lg justify-center">
              <h1 className=" text-white text-sm font-semibold">Recommended</h1>
            </div>
            <div className=" px-10 pt-5 pb-10 flex flex-col gap-10">
              <div className=" flex flex-col w-full items-center gap-1 text-center">
                <h1 className=" text-4xl font-bold text-red-800 animate-bounce">
                  {label}
                </h1>
                <h1 className=" text-xs text-gray-500">
                  Grow your business without limits
                </h1>
                <hr className=" border-gray-400 w-full mt-3" />
              </div>
              <div className=" flex flex-col items-center gap-2 text-white w-full justify-center">
                <div
                  onClick={handleIsPremiumClicked}
                  className={` w-full px-2 py-2 text-sm  ${
                    isPremium ? "bg-red-800" : "bg-black"
                  } rounded-xl flex items-center justify-center`}
                >
                  <h1>Premium</h1>
                </div>
                <div
                  onClick={handleIsPlusClicked}
                  className={` w-full px-2 py-2 text-sm  ${
                    isPremiumPlusClicked ? "bg-red-800" : "bg-black"
                  } rounded-xl flex items-center justify-center`}
                >
                  <h1 className=" flex items-center gap-2">Premium Plus</h1>
                </div>
                <div
                  onClick={handleIsPlatinumClicked}
                  className={` w-full px-2 py-2 text-sm  ${
                    isPlatinum ? "bg-red-800" : "bg-black"
                  } rounded-xl flex items-center justify-center`}
                >
                  <h1 className=" flex items-center   gap-2">Platinum</h1>
                </div>
              </div>
              <div className=" ">
                <div className=" flex flex-col gap-5 items-center">
                  <h1 className="   text-center">
                    <span className="font-semibold text-black text-2xl">
                      Membership Fee :{" "}
                      <span className=" text-red-700">£{premium}</span>
                    </span>
                    <br />
                    {/* <span className=" text-xs">(Excluding VAT)</span> */}
                  </h1>

                  <h1 className=" text-sm ">
                    <span className=" font-medium">Final price : </span> £
                    {premiumFinal}{" "}
                    <span className=" text-xs">
                      (Including VAT & conversion)
                    </span>
                  </h1>
                </div>
                <hr className=" w-full mt-10 border-gray-400" />
              </div>

              <div className=" flex flex-col gap-2">
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">Validity: 1 year</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-red-500 ">
                    <FaExclamation />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    ⁠Eligibility conditions
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    More course availabilities
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    Wide no. of learners (T&C applies)
                  </h1>
                </div>
                {/* <div className=" flex gap-2 items-start">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    Charges applies exceeding agreed number of learners
                  </h1>
                </div> */}
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">Curriculum support</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    UK & US certification (dual)
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">No certificate fee</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">Performance reward</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">⁠Partner dominant</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    Free membership (upon score board)
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">Member listing</h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    Staff training & benefits
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">Alchemy exchange</h1>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                <a href={premiumsLink}>
                  <div
                    className=" w-40 h-12 flex items-center justify-center bg-blue-600 rounded-3xl cursor-pointer hover:w-44 hover:h-14 hover:bg-red-600"
                    style={{ transitionDuration: "0.2s" }}
                  >
                    <h1 className=" text-white text-sm">Choose premium</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* value */}
          <div className="w-full my-3 md:my-0 md:w-[400px] h-auto bg-gray-100 shadow-md rounded-xl border border-gray-300 py-10 px-10 flex flex-col gap-10">
            <div className=" flex flex-col w-full items-center gap-1 text-center">
              <h1 className=" text-3xl font-bold text-green-700">Value</h1>
              <h1 className=" text-xs text-gray-500">
                Add fuel to grow your thriving business
              </h1>
              <hr className=" border-gray-400 w-full mt-3" />
            </div>
            <div className=" ">
              <div className=" flex flex-col gap-5 items-center">
                <h1 className="   text-center">
                  <span className="font-semibold text-black text-2xl">
                    Membership Fee :{" "}
                    <span className=" text-red-700">£1,999 </span>
                  </span>
                  <br />
                </h1>

                <h1 className=" text-sm ">
                  <span className=" font-medium">Final price : </span> £2,400{" "}
                  <span className=" text-xs">(Including VAT & conversion)</span>
                </h1>
              </div>
              <hr className=" w-full mt-10 border-gray-400" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">Validity: 1 year</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Eligibility conditions
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Limited course availability
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  ⁠Learners as per agreed no
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Extra learner allowance
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm">Curriculum support</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Membership amendments for full price
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-green-500 text-xl">
                  <TiTick />
                </h1>
                <h1 className=" text-gray-500 text-sm"> ⁠UK certification</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">
                  Certificate fee ( additional)
                </h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">⁠Board dominant</h1>
              </div>
              <div className=" flex gap-2 items-center">
                <h1 className=" text-red-500 ">
                  <FaExclamation />
                </h1>
                <h1 className=" text-gray-500 text-sm">Limited Training</h1>
              </div>
            </div>
            <div className=" w-full flex justify-center">
              <a href="https://buy.stripe.com/4gw6oA33Y6rJc7e4gh">
                <div
                  className=" w-40 h-12 flex items-center justify-center bg-blue-600 rounded-3xl cursor-pointer hover:w-44 hover:h-14 hover:bg-red-600"
                  style={{ transitionDuration: "0.2s" }}
                >
                  <h1 className=" text-white text-sm">Choose value</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
