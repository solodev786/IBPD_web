import React from "react";
import ReactPlayer from "react-player/lazy";
import { Player } from "video-react";
import logo1 from "../../assets/Logos/columbia.png";
import logo2 from "../../assets/Logos/cork.png";
import logo3 from "../../assets/Logos/CROATIA.png";
import logo4 from "../../assets/Logos/czech.png";
import logo5 from "../../assets/Logos/eu.png";
import logo6 from "../../assets/Logos/EWF.png";
import logo7 from "../../assets/Logos/finland.png";
import logo8 from "../../assets/Logos/Germany.png";
import logo9 from "../../assets/Logos/iceland.png";
import logo10 from "../../assets/Logos/INTERNATIONAL_CAREER_SKILLS.png";
import logo11 from "../../assets/Logos/ireland.png";
import logo12 from "../../assets/Logos/italy 1.png";
import logo13 from "../../assets/Logos/latvia.png";
import logo14 from "../../assets/Logos/litu 3.png";
import logo15 from "../../assets/Logos/lituvania 2.png";
import logo16 from "../../assets/Logos/LOGO.png";
import logo17 from "../../assets/Logos/peru.png";
import logo18 from "../../assets/Logos/polish 2.png";
import logo19 from "../../assets/Logos/polish.png";
import logo20 from "../../assets/Logos/Romania.png";
import logo21 from "../../assets/Logos/Screenshot 2024-04-13 121554.png";
import logo22 from "../../assets/Logos/Screenshot 2024-04-13 131110.png";
import logo23 from "../../assets/Logos/Screenshot 2024-04-13 145114.png";
import logo24 from "../../assets/Logos/Screenshot 2024-04-13 154214.png";
import logo25 from "../../assets/Logos/serbia.png";
import logo26 from "../../assets/Logos/skill net.jpeg";
import logo27 from "../../assets/Logos/SWEDEN.png";
import logo28 from "../../assets/Logos/university_of_pannonia_logo.jpeg";
import logo29 from "../../assets/Logos/Via_Rail-Logo.wine.png";
import logo30 from "../../assets/Logos/vsfs.png";
import logo31 from "../../assets/Logos/New Logos/Arentina 2.png";
import logo32 from "../../assets/Logos/New Logos/Argentina.png";
import logo33 from "../../assets/Logos/New Logos/Australia.png";
import logo34 from "../../assets/Logos/New Logos/Austria 2.png";
import logo35 from "../../assets/Logos/New Logos/Austria.png";
import logo36 from "../../assets/Logos/New Logos/Canada.png";
import logo37 from "../../assets/Logos/New Logos/Georgia.png";
import logo38 from "../../assets/Logos/New Logos/Newzealand.png";
import logo39 from "../../assets/Logos/New Logos/Norway 2.png";
import logo40 from "../../assets/Logos/New Logos/Norway.png";
import logo41 from "../../assets/Logos/New Logos/US.png";
import Marquee from "react-fast-marquee";
import Video from "./Video";

function WhatIBPDHas() {
  return (
    <div className=" w-full h-auto pt-10 md:pt-0 pb-10">
      <div className=" flex flex-col ">
        <div className=" flex gap-5 items-center py-10 w-full bg-white justify-center md:justify-start">
          <hr className=" border-black border-2  w-[55px] hidden md:block" />
          <div className=" flex flex-col gap-5 ">
            <h1 className=" text-2xl w-80 md:text-4xl md:w-[360px] text-[#303030] font-semibold px-10 md:px-0 text-center md:text-start">
              Our global partners
            </h1>
            <hr className=" border-gray-300  md:hidden" />
          </div>
          <hr className=" border-black  border-2 w-full hidden md:block" />
        </div>
        <div className=" w-full h-44 bg-white flex items-center justify-center">
          <Marquee
            autoFill
            className=" flex items-center gap-20"
            pauseOnHover
            speed={120}
          >
            <div className=" flex items-center gap-20 ">
              <img src={logo1} alt="" width={150} />
              <img src={logo2} alt="" width={150} />
              <img src={logo3} alt="" width={100} />
              <img src={logo4} alt="" width={100} />
              <img src={logo5} alt="" width={150} />
              <img src={logo6} alt="" width={150} />
              <img src={logo7} alt="" width={150} />
              <img src={logo8} alt="" width={100} />
              <img src={logo9} alt="" width={150} />
              <img src={logo10} alt="" width={100} />
              <img src={logo11} alt="" width={150} />
              <img src={logo12} alt="" width={150} />
              <img src={logo13} alt="" width={100} />
              <img src={logo14} alt="" width={150} />
              <img src={logo15} alt="" width={150} />
              <img src={logo16} alt="" width={150} />
              <img src={logo17} alt="" width={150} />
              <img src={logo18} alt="" width={150} />
              <img src={logo19} alt="" width={150} />
              <img src={logo20} alt="" width={150} />
              <img src={logo21} alt="" width={150} />
              <img src={logo22} alt="" width={150} />
              <img src={logo23} alt="" width={150} />
              <img src={logo24} alt="" width={150} />
              <img src={logo25} alt="" width={150} />
              <img src={logo26} alt="" width={150} />
              <img src={logo27} alt="" width={100} />
              <img src={logo28} alt="" width={100} />
              <img src={logo29} alt="" width={150} />
              <img src={logo30} alt="" width={100} />
              <img src={logo31} alt="" width={150} />
              <img src={logo32} alt="" width={150} />
              <img src={logo33} alt="" width={150} />
              <img src={logo34} alt="" width={150} />
              <img src={logo35} alt="" width={150} />
              <img src={logo36} alt="" width={150} />
              <img src={logo37} alt="" width={150} />
              <img src={logo38} alt="" width={150} />
              <img src={logo39} alt="" width={100} />
              <img src={logo40} alt="" width={100} />
              <img src={logo41} alt="" width={150} />
            </div>
          </Marquee>
        </div>
        <h1 className=" text-2xl mt-5 md:mt-0 md:text-4xl md:w-full text-[#303030] font-semibold px-10 md:px-20 md:pt-10 text-center md:text-start">
          Our commitments
        </h1>
        <div className=" w-full flex justify-start px-10 mt-10 md:px-20 text-gray-500">
          <h1 className=" md:w-[1000px]  text-justify md:text-justify">
            At IBPD UK, we stand as your
            dedicated partner, advocating for your professional growth, and
            proclaiming that your potential is not just acknowledged—it is
            celebrated.  Your professional journey is our shared narrative, and
            together, we'll redefine the boundaries of success. In the realm of
            IBPD, we believe in the precision of professional development,
            recognizing that success is an amalgamation of strategic learning,
            expert guidance, and a thriving community. It's not merely about
            acquiring skills; it's about crafting a journey that aligns
            seamlessly with your aspirations, ensuring you don't just meet your
            goals but surpass them.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WhatIBPDHas;
