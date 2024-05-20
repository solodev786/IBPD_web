import React from "react";
import LOGO from "../assets/ibpd_footer_logo.png";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { useMediaQuery } from "@react-hook/media-query";
import { useNavigate } from "react-router-dom";
import newLogo from "../assets/ttf.png";
import certLogo from "../assets/us 3.png";
import footerOne from "../assets/footerOne.png";
import footerTwo from "../assets/footerTwo.png";
import footerThree from "../assets/footerThree.png";
import footerFour from "../assets/footerFour.png";
import footerFive from "../assets/footerFive.png";

function Footer() {
  const navigate = useNavigate();
  const navToAbout = () => {
    navigate("/about");
  };

  const navToPartner = () => {
    navigate("/partner");
  };
  const navToHome = () => {
    navigate("/");
  };

  const navToPrograms = () => {
    navigate("/programs");
  };

  const navToContact = () => {
    navigate("/contact");
  };
  const isMobile = useMediaQuery("(max-width: 639px)");

  if (isMobile) {
    return (
      <div className=" w-full h-auto px-5 flex flex-col gap-5 py-5 bg-black text-white">
        <div className=" w-full flex justify-center ">
          <img className=" " src={LOGO} alt="" />
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <img src={newLogo} alt="" width={230} />
          </div>
          <div>
            <img src={certLogo} alt="" width={80} />
          </div>
        </div>

        <hr />
        <div className=" flex flex-col gap-5">
          <div className=" flex flex-col gap-1">
            <h1 className="font-semibold">Address</h1>
            <div className=" flex items-start gap-2">
              <h1 className=" text-xl">
                <MdLocationOn />
              </h1>
              <h1>Office 128, City Road, London, EC1V 2NX, UNITED KINGDOM</h1>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <h1>Contact us</h1>
            <div className=" flex gap-2 items-center">
              <h1 className=" text-xl">
                <IoMail />
              </h1>
              <h1>info@ibpd.org</h1>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1 className=" text-xs w-full justify-center text-center">
            Copyright ©2024 Imperial Board for Professional Development UK
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-auto pt-10 pb-5 px-10 flex  justify-between gap-10 bg-black items-center">
      <div className=" w-1/2 h-full flex flex-col justify-center items-start">
        <div className=" w-[400px] h-20 ">
          <img src={LOGO} width={260} alt="" />
        </div>
        <div className=" flex flex-col gap-4">
          <div className=" flex gap-5 items-center">
            <div className=" my-3 mt-8 ml-[-5px] flex flex-wrap items-center gap-4 ">
              <img src={newLogo} alt="" width={160} />
              <img width={70} src={footerTwo} alt="" />
              <img width={100} src={footerFour} alt="" />
              <img width={100} src={footerFive} alt="" />
              <img src={certLogo} alt="" width={80} />
            </div>
          </div>
        </div>

        <div className=" mt-10">
          <h1 className=" text-white text-xs">
            Copyright ©2024 Imperial Board for Professional Development UK
          </h1>
        </div>
      </div>

      <div className=" flex items-center gap-20">
        <div className=" flex items-start gap-10 justify-center text-white ">
          <div className=" flex flex-col gap-2">
            <h1 className=" font-semibold w-24 ">Quick links</h1>
            <div className=" text-sm flex flex-col gap-1">
              <h1 className=" cursor-pointer" onClick={navToHome}>
                Home
              </h1>
              <h1 className=" cursor-pointer" onClick={navToAbout}>
                About
              </h1>
              <h1 className=" cursor-pointer" onClick={navToPartner}>
                Partners
              </h1>
              <h1 className=" cursor-pointer" onClick={navToPrograms}>
                Programs
              </h1>
              <h1 className=" cursor-pointer" onClick={navToContact}>
                Contact
              </h1>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className=" w-[1px] h-[150px] bg-white"></div>
            <div className=" flex flex-col gap-2  w-44">
              {/* <h1>Address</h1> */}
              <div className=" flex items-center ">
                <div className=" flex gap-3 items-start">
                  <h1>
                    <MdLocationOn />
                  </h1>
                  <h1 className=" text-sm">
                    Office 128, City Road, <br /> London, EC1V 2NX, <br />{" "}
                    UNITED KINGDOM
                  </h1>
                </div>
              </div>
              <div className=" flex items-center gap-32 ">
                <div>
                  <div className=" flex gap-3 items-center">
                    <h1>
                      <IoMail />
                    </h1>
                    <h1 className=" text-sm">Info@ibpd.org</h1>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" mt-10 mr-20  flex items-center gap-3  ">
          <img width={160} src={footerThree} alt="" />
          <img width={120} src={footerOne} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
