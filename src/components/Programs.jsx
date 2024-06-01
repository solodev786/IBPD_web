import React, { useEffect, useRef } from "react";
import programsBg from "../assets/programs_new.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FcBusinessman } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { TbRibbonHealth } from "react-icons/tb";
// import { SiYourtraveldottv } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { ImDatabase } from "react-icons/im";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { TbMessageLanguage } from "react-icons/tb";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { CgEditBlackPoint } from "react-icons/cg";
import { BsArrowRightShort } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { PiVirtualRealityFill } from "react-icons/pi";
import { FcFilmReel } from "react-icons/fc";
import { GiLargeDress } from "react-icons/gi";

function Programs() {
  return (
    <div className=" w-auto ">
      <div
        className=" w-full h-[400px] md:h-[1000px] bg-cover"
        style={{
          backgroundImage: `url(${programsBg})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div className=" w-full h-2/4 flex items-center justify-center">
          <div className=" flex flex-col gap-3 items-center text-white">
            <h1 className=" text-4xl md:text-6xl font-semibold">Programs</h1>
            <h1 className="px-10 w-[400px] md:w-[750px] text-lg text-center">
              At IBPD, we offer a diverse range of courses designed to cater to
              the evolving needs of professionals across various industries.
            </h1>
          </div>
        </div>
      </div>
      <div className=" md:px-32 py-10">
        <div className=" flex gap-10 items-start text-sm">
          <div className="px-5 md:px-0 flex flex-col gap-8">
            <h1 className=" md:w-[1000px] text-justify">
              Our curriculum is meticulously crafted to provide a holistic
              learning experience, incorporating technical expertise, leadership
              skills, and personal development. These advanced courses are
              tailored for professionals seeking to deepen their expertise in
              specific industries. From advanced technical skills to
              industry-specific knowledge, these courses aim to elevate
              participants to the pinnacle of their professions. Here is a
              glimpse of the courses you can expect to find at IBPD.
            </h1>
            <div className=" md:pl-5 md:flex md:flex-wrap md:gap-5 text-white">
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <GiLargeDress />
                </h1>
                <h1>Fashion Design</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <FcAdvertising />
                </h1>
                <h1>Sound Engineering</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <TbRibbonHealth />
                </h1>
                <h1>Health and Safety Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <TbRibbonHealth />
                </h1>
                <h1>Hospitality and Tourism Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <MdAccountBalance />
                </h1>
                <h1>Accounting and Finance</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <GrTechnology />
                </h1>
                <h1>Human Resource Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <MdManageHistory />
                </h1>
                <h1>Project Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <ImDatabase />
                </h1>
                <h1>Data Science</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <SiCyberdefenders />
                </h1>
                <h1>Cyber Security</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <GiArtificialIntelligence />
                </h1>
                <h1>Artificial Intelligence</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <MdModelTraining />
                </h1>
                <h1>Procurement and Material Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <SiHiveBlockchain />
                </h1>
                <h1>Logistics and Supply Chain Management</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <FaGraduationCap />
                </h1>
                <h1>Early Years Education</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <TbMessageLanguage />
                </h1>
                <h1>Communicative English & Language Studies</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <PiVirtualRealityFill />
                </h1>
                <h1>Augmented Reality</h1>
              </div>
              <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-center my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <FcFilmReel />
                </h1>
                <h1>Film Technology</h1>
              </div>
              {/* <div
                style={{ transitionDuration: "0.3s" }}
                className=" rounded-2xl md:w-[500px] h-14 bg-black flex gap-4 px-5 items-centers my-3 md:my-0 hover:bg-red-600 hover:h-16 cursor-pointer"
              >
                <h1 className=" text-3xl">
                  <MdHealthAndSafety />
                </h1>
                <h1>Health and wellness</h1>
              </div> */}
            </div>
            <h1 className=" md:w-[1000px] text-justify">
              These courses represent just a snapshot of the extensive offerings
              at IBPD. Our commitment is to empower you with the knowledge and
              skills necessary for success in today's dynamic professional
              landscape. Each course is crafted with precision, ensuring a
              transformative learning experience that goes beyond traditional
              boundaries. Our courses aren't just about learning; they're about
              shaping futures, fostering leadership, and empowering you to
              redefine success on your terms. Join IBPD and embark on a journey
              of continuous growth and professional excellence.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Programs;
