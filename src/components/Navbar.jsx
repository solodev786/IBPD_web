import React, { useEffect, useRef, useState } from "react";
import LOGO from "../assets/modifiedLogo3.png";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const [isMenuIconsclicked, setisMenuIconsclicked] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  const { inView, ref } = useInView({
    threshold: 0,
  });
  const logoRef = useRef();
  const menuAnim = useRef();

  useEffect(() => {
    setMenuHeight(isMenuIconsclicked ? menuRef.current.scrollHeight : 0);
  }, [isMenuIconsclicked]);

  const toggleMenu = () => {
    setisMenuIconsclicked(!isMenuIconsclicked);
  };

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
  const navToPayment = () => {
    navigate("/payment");
  };
  return (
    <div ref={ref} className=" w-full ">
      <div className=" ">
        <div className=" bg-black flex items-center  justify-between px-5 md:w-full md:bg-transparent md:h-full md:px-10 md:flex  md:justify-between">
          <div
            ref={logoRef}
            style={{ transitionDuration: "0.5s" }}
            onClick={navToHome}
            className=" w-32 flex items-center  h-32 md:w-40 md:h-44 bg-black md:bg-opacity-75 md:flex md:items-center md:justify-center drop-shadow-lg"
          >
            <img
              src={LOGO}
              alt=""
              className="w-40 h-40 md:w-60 md:h-60 object-cover"
            />
          </div>
          <div className=" text-white md:hidden ">
            <h1 onClick={toggleMenu} className=" text-5xl">
              <IoMenu />
            </h1>
          </div>
          <div
            ref={menuAnim}
            style={{ transitionDuration: "0.5s" }}
            className="hidden md:py-10 md:block"
          >
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="657"
                height="60"
                viewBox="0 0 690 61"
                fill="none"
              >
                <path
                  d="M42.1844 0H657V71H0L42.1844 0Z"
                  fill="black"
                  fillOpacity="0.83"
                />
              </svg>
              <div className="absolute bottom-0  w-full h-full flex items-center justify-center text-white">
                <div className=" flex gap-8 items-center">
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToHome}
                  >
                    Home
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToAbout}
                  >
                    About us
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToPartner}
                  >
                    Partners
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToPrograms}
                  >
                    Programs
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToContact}
                  >
                    Contact
                  </span>
                  <span
                    className=" hover:text-blue-200 cursor-pointer hover:underline"
                    onClick={navToPayment}
                  >
                    Payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={menuRef}
          className="w-full h-80 overflow-hidden mb-5 "
          style={{
            height: `${menuHeight}px`,
            transition: "height 0.3s ease-in-out",
          }}
        >
          <div className=" w-full   py-5 bg-white flex items-center justify-start px-5  md:hidden">
            <div className=" flex flex-col gap-2 w-full">
              <h1 onClick={navToHome} className=" text-xl font-semibold">
                Home
              </h1>
              <hr className=" " />
              <h1 onClick={navToAbout} className=" text-xl font-semibold">
                About us
              </h1>
              <hr />
              <h1 onClick={navToPartner} className=" text-xl font-semibold">
                Partners
              </h1>
              <hr />
              <h1 onClick={navToPrograms} className=" text-xl font-semibold">
                Programs
              </h1>
              <hr />
              <h1 onClick={navToContact} className=" text-xl font-semibold">
                Contact
              </h1>
              <hr />

              <h1 onClick={navToPayment} className=" text-xl font-semibold">
                Payment
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
