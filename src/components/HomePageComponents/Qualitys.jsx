import React from "react";

function Qualitys() {
  return (
    <div className=" pl-10  w-full md:pt-10 py-10 md:py-5 bg-white md:pl-0    md:flex  items-start justify-center  md:gap-20 text-[#303030]">
      <div className=" flex flex-col gap-2 w-80 justify-center mb-6 md:mb-0">
        <h1 className=" text-3xl font-semibold">Quality</h1>
        <div className=" flex flex-col gap-3 ">
          <h1 className=" text-justify">
            we are proud to be at the forefront of quality programs that meet
            rigorous standards of academic excellence.
          </h1>
          <hr className=" md:hidden" />
        </div>
      </div>
      <div className=" flex flex-col gap-2 w-72 justify-center mb-6 md:mb-0">
        <h1 className=" text-3xl font-semibold">Recognition</h1>
        <div className=" flex flex-col gap-3">
          <h1 className=" text-justify">
            setting you on a path to a future where the accomplishments stand
            out and shine.
          </h1>
          <hr className=" md:hidden" />
        </div>
      </div>
      <div className=" flex flex-col gap-2 w-80  justify-center pb-6 md:mb-0">
        <h1 className=" text-3xl font-semibold">Excellence</h1>
        <div className=" flex flex-col gap-3">
          <h1 className=" ">
            Journey with IBPD is not just transformative but consistently marked
            by exceptional achievement.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Qualitys;
