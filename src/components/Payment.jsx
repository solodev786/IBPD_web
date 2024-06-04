import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TiTick } from "react-icons/ti";
import { FaExclamation } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

function Payment() {
  const [premium, setPremium] = useState("2,699");

  const [label, setLabel] = useState("Premium");

  const [premiumPlus, setPremiumPlus] = useState("4,599");
  const [platinum, setPlatinum] = useState("5,899");

  const [premiumFinal, setPremiumFinal] = useState("3,200");

  const [premiumPlusFinal, setPremiumPlusFinal] = useState("5,500");
  const [platinumFinal, setPlatinumFinal] = useState("7,100");

  const [isPremiumPlusClicked, setIsPremiumPlusClicked] = useState(false);
  const [isPlatinum, setIsPlatinumClicked] = useState(false);
  const [isPremium, setIsPremiumClicked] = useState(false);

  const handleIsPlusClicked = () => {
    setIsPremiumPlusClicked(!isPremiumPlusClicked);
    setPremium(premiumPlus);
    setPremiumFinal(premiumPlusFinal);
    setLabel("Premium Plus");
  };

  const handleIsPlatinumClicked = () => {
    setIsPlatinumClicked(!isPlatinum);
    setPremium(platinum);
    setPremiumFinal(platinumFinal);
    setLabel("Platinum");
  };
  const handleIsPremiumClicked = () => {
    setIsPremiumClicked(!isPremium);
    setPremium("2,699");
    setPremiumFinal("3,200");
    setLabel("Premium");
  };

  return (
    <div className=" bg-gray-200 w-full min-h-screen h-auto">
      <Navbar />
      <div className=" my-10 flex flex-col gap-20 px-5 md:px-10 py-10">
        <div className=" flex w-full justify-center">
          <div className=" flex flex-col items-center gap-2 text-center">
            <h1 className=" text-3xl font-semibold">Pick your perfect plan</h1>
            <h1 className=" text-gray-500 w-full md:w-[500px]">
              Choose the best membership plan from the below options
            </h1>
            <div className=" w-64 h-14 mt-5 flex items-center justify-center bg-blue-800 font-semibold text-white rounded-md animate-pulse">
              <h1>Membership Application</h1>
            </div>
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
                  className=" w-full py-2 text-sm  bg-black rounded-xl flex items-center justify-center shadow-lg"
                >
                  <h1>Premium</h1>
                </div>
                <div
                  onClick={handleIsPlusClicked}
                  className=" w-full px-2 py-2 text-sm  bg-black rounded-xl flex items-center justify-center"
                >
                  <h1 className=" flex items-center gap-2">Premium Plus</h1>
                </div>
                <div
                  onClick={handleIsPlatinumClicked}
                  className=" w-full py-2 text-sm  bg-black rounded-xl flex items-center justify-center"
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
                    No limits for leaners
                  </h1>
                </div>
                <div className=" flex gap-2 items-center">
                  <h1 className=" text-green-500 text-xl">
                    <TiTick />
                  </h1>
                  <h1 className=" text-gray-500 text-sm">
                    No charge for extra learner
                  </h1>
                </div>
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
                <a href="https://buy.stripe.com/00g4gs7ke7vN3AIbIK">
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
          <div className="w-full my-3 md:my-0 md:w-[400px] h-auto bg-gray-100 shadow-md rounded-xl border border-gray-300 py-10 px-10 flex flex-col gap-10">
            <div className=" flex flex-col w-full items-center gap-1 text-center">
              <h1 className=" text-3xl font-bold text-green-700">Value</h1>
              <h1 className=" text-xs text-gray-500">
                Add fuel to grow your thriving business
              </h1>
              <hr className=" border-gray-400 w-full mt-3" />
            </div>
            <div className=" ">
              <div className=" flex flex-col gap-1 items-center">
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
