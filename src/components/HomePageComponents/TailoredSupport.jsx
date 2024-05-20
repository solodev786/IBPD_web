import React from "react";
import girl from "../../assets/container-five.webp";

function TailoredSupport() {
  return (
    <div className="  w-full h-auto flex items-center justify-center">
      <div className=" flex my-10 items-center ">
        <img src={girl} width={400} alt="" className="z-10" />
        <div className=" w-[800px] h-96 bg-black text-white ml-[-100px] ">
          <div className=" flex items-center justify-center w-full h-full">
            <div className=" flex flex-col gap-5">
              <h1 className=" text-3xl font-semibold tracking-wide">
                Tailored support And
              </h1>
              <h1 className=" w-[600px]">
                The educational landscape is dynamic, and Your Accreditation
                Board's Name recognizes the importance of adaptability.
                Accredited institutions are encouraged to embrace change,
                innovation, and advancements in education. This adaptability
                ensures that institutions remain resilient and ready to meet the
                evolving needs of students and the workforce.{" "}
                <span className=" underline">Read more</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailoredSupport;
