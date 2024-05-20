import React, { useState } from "react";
import logo3 from "../../assets/whyChooseBPD/Dynamic Networking.png";
import logo4 from "../../assets/whyChooseBPD/Cutting-edge Resources.png";
import logo5 from "../../assets/whyChooseBPD/Recognition of Excellence.png";
import logo6 from "../../assets/whyChooseBPD/icons/Diverse Offerings.png";
import logo7 from "../../assets/whyChooseBPD/icons/Expertise.png";
import logo8 from "../../assets/whyChooseBPD/icons/Flexibility and Customization.png";
import logo9 from "../../assets/whyChooseBPD/icons/Global Reach.png";
import logo10 from "../../assets/whyChooseBPD/icons/Reputation and Prestige.png";

function Global() {
  const [isOpen, setIsOpen] = useState(false);

  const paragraphStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  return (
    <div className=" w-full  flex flex-col gap-10 mt-10 pb-10 md:pb-10">
      <div className=" flex gap-5 items-center w-full justify-center md:justify-start">
        <hr className=" border-black border-2 w-[55px] hidden md:block" />
        <div className=" flex flex-col gap-5 ">
          <h1 className=" text-2xl md:text-4xl w-[330px] text-[#303030] font-semibold px-10 md:px-0 text-center md:text-start">
            Why choose IBPD
          </h1>
          <hr className=" border-gray-300  md:hidden" />
        </div>
        <hr className=" border-black  border-2 w-full hidden md:block" />
      </div>
      <div className="  flex gap-5 pl-10 md:px-10 md:py-10">
        {/* <div className=" w-[1px] h-[660px] bg-black  "></div> */}
        <div className="   md:flex md:flex-wrap  md:gap-8 md:w-full">
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo10}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Reputation and Prestige
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  IBPD's reputation in learning and professional development is
                  built on a foundation of excellence and integrity. Employers,
                  professionals, and institutions worldwide recognize the value
                  of certifications and programs offered by IBPD, enhancing the
                  credibility of individuals who participate in its initiatives
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo9}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Global Reach
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  With partnerships and affiliations with institutions
                  worldwide, IBPD offers professional development opportunities
                  on a global scale. This global perspective is invaluable for
                  organizations operating in international markets or seeking to
                  expand their reach, as it exposes participants to diverse
                  perspectives, cultural nuances, and global best practices.
                </h1>
              </div>
            </div>
          </div>

          {/* <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo5}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Recognition of Excellence
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  Your achievements at IBPD are not just milestones; they are
                  celebrated achievements. Our commitment to recognizing
                  excellence ensures that your hard work and dedication receive
                  the acknowledgment they deserve.
                </h1>
              </div>
            </div>
          </div> */}
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo6}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Diverse Offerings
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  IBPD's extensive catalogue of professional development
                  programs covers a wide range of industries, disciplines, and
                  skill levels. From management and leadership courses to
                  technical training in specialized fields, there's something
                  for everyone. This diversity enables organizations to address
                  the unique learning needs of their workforce, fostering a
                  culture of continuous learning and skill enhancement.
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo5}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Recognition of Excellence
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  Your achievements at IBPD are not just milestones; they are
                  celebrated achievements. Our commitment to recognizing
                  excellence ensures that your hard work and dedication receive
                  the acknowledgment they deserve.
                </h1>
              </div>
            </div>
          </div>

          {/* <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo7}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Expertise
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm ">
                  BPD's team comprises seasoned professionals with extensive
                  experience in their respective fields. These experts bring
                  real-world insights, practical knowledge, and academic rigor
                  to their teaching and curriculum development, ensuring that
                  participants receive high-quality instruction and relevant,
                  up-to-date content.
                </h1>
              </div>
            </div>
          </div> */}
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:py-10 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo8}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Flexibility and Customization
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  IBPD understands that every organization has unique training
                  needs and constraints. Therefore, it offers flexible delivery
                  options and customization opportunities to accommodate varying
                  schedules, learning preferences, and organizational
                  objectives. Whether it's onsite training, virtual classrooms,
                  self-paced modules, or blended learning approaches,
                  organizations can tailor programs to suit their specific
                  requirements.
                </h1>
              </div>
            </div>
          </div>
          
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo4}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black md:bg-transparent md:w-[400px] md:px-2 rounded-lg py-2 text-white md:text-start">
                    Cutting-edge Resources
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  Stay at the forefront of your industry with access to the
                  latest tools, technologies, and industry trends. IBPD ensures
                  that you are equipped with the knowledge and skills demanded
                  by today's ever-evolving professional landscape.
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" animate-pulse w-full h-full bg-cover"
                  src={logo3}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black md:bg-transparent md:w-[400px] md:px-2 rounded-lg py-2 text-white md:text-start">
                    Dynamic Networking
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm">
                  Join a vibrant community of ambitious individuals who, like
                  you, are committed to continuous growth. Network with peers,
                  collaborate on projects, and create lasting connections that
                  extend beyond the virtual classroom.
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center py-5 md:py-0">
            <div
              style={{ transitionDuration: "0.2s" }}
              className="  md:bg-black md:text-white md:px-10 md:h-72 md:rounded-xl md:flex md:gap-5 md:items-center md:cursor-pointer md:hover:bg-red-800  md:hover:h-80"
            >
              <div className=" hidden md:block w-24 h-24  ">
                <img
                  className=" w-full h-full bg-cover animate-pulse"
                  src={logo7}
                  alt=""
                />
              </div>
              <div className=" md:flex md:flex-col ">
                <div className=" flex gap-4 md:items-center ">
                  <h1 className="w-[330px] px-6 text-xl bg-black  md:w-[400px] md:bg-transparent md:px-2 rounded-lg py-2 text-white md:text-start">
                    Expertise
                  </h1>
                </div>
                <h1 className=" text-justify pl-2 pr-10 md:pr-0 mt-2 md:w-[400px] md:text-justify md:text-gray-200 md:text-sm ">
                  BPD's team comprises seasoned professionals with extensive
                  experience in their respective fields. These experts bring
                  real-world insights, practical knowledge, and academic rigor
                  to their teaching and curriculum development, ensuring that
                  participants receive high-quality instruction and relevant,
                  up-to-date content.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Global;
