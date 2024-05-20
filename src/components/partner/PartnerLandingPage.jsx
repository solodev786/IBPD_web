import React, { useEffect, useRef } from "react";
import partnerBg from "../../assets/partner_new.webp";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useInView } from "react-intersection-observer";

function PartnerLandingPage() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();
  const sixRef = useRef();
  const sevenRef = useRef();

  useEffect(() => {
    if (inView) {
      oneRef.current.style.transform = "scale(100%)";
      // oneRef.current.style.transform = "scale(100%)";

      twoRef.current.style.transform = "scale(100%)";
      // twoRef.current.style.transform = "scale(100%)";

      threeRef.current.style.transform = "scale(100%)";
      // threeRef.current.style.transform = "scale(100%)";

      fourRef.current.style.transform = "scale(100%)";
      // fourRef.current.style.transform = "scale(100%)";

      fiveRef.current.style.transform = "scale(100%)";
      // fiveRef.current.style.transform = "scale(100%)";

      sixRef.current.style.transform = "scale(100%)";
      // sixRef.current.style.transform = "scale(100%)";

      sevenRef.current.style.transform = "scale(100%)";
      // sevenRef.current.style.transform = "scale(100%)";
    } else {
      oneRef.current.style.transform = "scale(50%)";
      // oneRef.current.style.transform = "scale(0%)";

      twoRef.current.style.transform = "scale(50%)";
      // twoRef.current.style.transform = "scale(0%)";

      threeRef.current.style.transform = "scale(50%)";
      // threeRef.current.style.transform = "scale(0%)";

      fourRef.current.style.transform = "scale(50%)";
      // fourRef.current.style.transform = "scale(0%)";

      fiveRef.current.style.transform = "scale(50%)";
      // fiveRef.current.style.transform = "scale(0%)";

      sixRef.current.style.transform = "scale(50%)";
      // sixRef.current.style.transform = "scale(0%)";

      sevenRef.current.style.transform = "scale(50%)";
      // sevenRef.current.style.transform = "scale(0%)";
    }
  }, [inView]);
  return (
    <div>
      <div
        className=" w-full h-[400px] md:h-[1000px] bg-cover "
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <Navbar />
        <div className=" text-white w-full h-2/4 flex items-center justify-center">
          <div className=" flex flex-col gap-3 items-center">
            <h1 className=" text-4xl md:text-6xl font-semibold">
              Become a partner
            </h1>
            <h1 className="px-5 md:w-[650px] text-lg text-center">
              We're ambitious for our people, our communities and the region we
              serve - join us in making the world a better place.
            </h1>
          </div>
        </div>
      </div>
      <div className=" mb-20 mt-24 px-5 md:px-32 ">
        <div className=" flex gap-10 items-start">
          {/* <div className=" w-[1px] h-[940px] bg-black"></div> */}
          <div className=" flex flex-col gap-5 text-sm items-center w-full">
            <h1 className=" md:w-[1000px] text-justify">
              In the complex landscape of education, where diverse perspectives,
              methodologies, and innovations converge, collaboration stands as a
              cornerstone for progress. IBD recognizes the transformative power
              of collaboration, not only in its mission but as a guiding
              philosophy that shapes our approach to recognition, accreditation,
              and educational advancement. This comprehensive exploration delves
              into the multifaceted dimensions of collaboration within the
              context of IBPD emphasizing its significance in driving excellence
              in education globally. Partnership excellence, as embraced by
              IBPD, extends beyond mere cooperation; it embodies a commitment to
              shared goals, collective learning, and the synergistic impact that
              arises from diverse contributions.
            </h1>
            <h1 className="  md:w-[1000px] text-justify">
              IBPD actively collaborates with international educational
              standards organizations. This collaboration ensures that our
              accreditation standards align with global best practices. By
              engaging in discussions, conferences, and collaborative
              initiatives, we contribute to the development and refinement of
              global educational standards, fostering a harmonized approach
              towards excellence in education.
            </h1>
            <h1 className=" md:w-[1000px] text-justify">
              Recognizing learners as key stakeholders, IBPD actively involves
              them in the accreditation process. This collaborative approach
              ensures that the learners perspective is considered in the
              evaluation of institutions. Additionally, learners are engaged in
              forums, surveys, and discussions to gather insights into their
              educational experiences, contributing to the continuous
              improvement of learning centers and institutions. IBPD also
              collaborates with businesses, industry associations, and employers
              to understand the skills and competencies required in the
              professional landscape. This collaborative engagement informs
              accreditation criteria, ensuring that accredited institutions
              produce skilled talents who are well-prepared for the demands of
              the workforce.
            </h1>
            <h1 className=" md:w-[1000px] text-justify">
              Stakeholder engagement creates feedback loops that are vital for
              the continuous improvement of accreditation processes. Leaners,
              faculty, employers, and institutions provide valuable insights
              that inform the refinement of accreditation criteria, evaluation
              methodologies, and support mechanisms.
            </h1>
            <h1 className=" md:w-[1000px] text-justify">
              As IBPD continues to champion collaborative excellence, we invite
              Learning Centers, institutions, and stakeholders to join us in
              this transformative endeavor. Together, let's cultivate a culture
              of collaboration that transcends boundaries, enriches educational
              practices, and propels us towards a future where excellence in
              education knows no limits. For inquiries, partnership
              opportunities, or more information, please contact us at
              <span className="  font-semibold"> Info@IBPD.org</span>
            </h1>
            <div
              ref={ref}
              className=" mt-5 flex flex-col md:w-[1000px] gap-5 text-white"
            >
              <div
                ref={oneRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "0.3s",
                }}
                className=" flex items-center gap-5 md:gap-6 px-6 h-14 bg-black rounded-3xl md:w-[600px] cursor-pointer  md:hover:h-[70px] md:hover:bg-red-600"
              >
                <h1 className=" md:text-xl text-gray-300">Step 1</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:ml-[-5px] md:text-xl md:font-semibold">
                  Application (EOI)
                </h1>
              </div>
              <div
                ref={twoRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "0.6s",
                }}
                className=" flex items-center px-6 gap-5 h-14 bg-black rounded-3xl md:w-[600px] md:hover:hover:h-16  md:hover:bg-red-600 cursor-pointer"
              >
                <h1 className="  md:text-xl text-gray-300">Step 2</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:text-xl md:font-semibold">Assessment </h1>
              </div>
              <div
                ref={threeRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "0.9s",
                }}
                className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl md:w-[600px] md:hover:hover:h-16  md:hover:bg-red-600 cursor-pointer"
              >
                <h1 className="  md:text-xl text-gray-300">Step 3</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:text-xl md:font-semibold">
                  Eligibility Decision
                </h1>
              </div>
              <div
                ref={fourRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "1.2s",
                }}
                className=" flex items-center gap-3 md:gap-5 px-6 h-14 md:h-14 bg-black rounded-3xl md:w-[600px] md:hover:h-16 md:hover:bg-red-600 cursor-pointer"
              >
                <h1 className="  w-[53px] md:w-auto md:text-xl text-gray-300 ">
                  Step 4
                </h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className="    md:text-left md:text-xl md:font-semibold">
                  Formal Discussion & Presentation
                </h1>
              </div>
              <div
                ref={fiveRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "1.5s",
                }}
                className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl md:w-[600px] md:hover:h-16 md:hover:bg-red-600 cursor-pointer"
              >
                <h1 className="  md:text-xl text-gray-300">Step 5</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:text-xl md:font-semibold">Final Decision</h1>
              </div>
              <div
                ref={sixRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "1.8s",
                }}
                className=" flex items-center gap-5 px-6 h-14 bg-black rounded-3xl md:w-[600px] md:hover:h-16 md:hover:bg-red-600 cursor-pointer"
              >
                <h1 className="  md:text-xl text-gray-300">Step 6</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:text-xl md:font-semibold">Payment</h1>
              </div>
              <div
                ref={sevenRef}
                style={{
                  transform: "translateX(0%)",
                  transitionDuration: "2.1s",
                }}
                className=" flex items-center gap-5 px-6 h-14 bg-green-600 md:bg-green-600 rounded-3xl md:w-[600px] md:hover:h-16 cursor-pointer"
              >
                <h1 className="  md:text-xl text-gray-300">Step 7</h1>
                <div className=" w-[1px] h-full bg-white"></div>
                <h1 className=" md:text-xl md:font-semibold">Agreement</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PartnerLandingPage;
