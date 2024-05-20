import React from "react";
import Navbar from "../Navbar";
import aboutBg from "../../assets/aboutus_bg.webp";
import Footer from "../Footer";

function AboutLanding() {
  return (
    <div>
      <div
        className=" w-full h-[400px] md:h-[1000px] bg-cover bg-black"
        style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <div className=" w-full h-2/4 flex items-center justify-center">
          <div className=" flex flex-col gap-3 text-white items-center">
            <h1 className="  text-4xl md:text-6xl font-semibold ">About us</h1>
            <h1 className="md:w-[650px] px-5 md:px-0 text-sm md:text-lg text-center">
              Welcome to Imperial Board for Professional Development UK. Decades
              of Dedication to ensure excellence in education across 18
              Countries.{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="  w-full h-auto">
        <div className=" my-10 text-sm  px-5  md:px-32 flex flex-col gap-8 pt-10 items-center w-full ">
          <div className=" flex items-center  gap-10 ">
            <h1 className=" md:w-[1000px] text-justify  md:px-0">
              Founded on the principles of promoting academic rigor, fostering
              continuous improvement, and ensuring global standards of
              educational excellence, Imperial Board for Professional
              Development UK (IBPD) was established with the vision of becoming
              a catalyst for positive change in the educational ecosystem.
              Guided by a commitment to shaping a brighter future through
              quality education, we have evolved into a trusted accreditation
              partner for learning centers and programs seeking validation and
              enhancement.
            </h1>
          </div>
          <div className=" flex items-start gap-10 ">
            <div className=" flex flex-col gap-4   ">
              <h1 className=" text-xl font-medium">Mission and Vision</h1>
              <h1 className=" md:w-[1000px] text-justify">
                At the heart of Imperial Board for Professional Development UK
                lies a compelling mission: to advance the quality of education
                globally. This mission goes beyond the confines of borders,
                transcending geographical, cultural, and institutional
                boundaries. It is a call to action, a commitment to fostering
                excellence in education through a multifaceted approach that
                recognizes the interconnectedness of the world. Our mission
                involves providing a rigorous and transparent recognitional
                process. Rigor ensures that the learning centers meet and exceed
                the highest standards of educational quality, while transparency
                ensures fairness, accountability, and trust in the process.
                Through this process, we aim to elevate the standard of
                education on a global scale.
              </h1>
              <h1 className="md:w-[1000px] text-justify">
                Nurturing excellence necessitates a commitment to continuous
                improvement. Institutions accredited by IBPD are not only
                acknowledged for their current standards but are also encouraged
                and supported in their journey of ongoing enhancement. This
                commitment to continuous improvement reflects our belief that
                excellence is not a destination but a continuous pursuit.
                Innovation is a key driver of excellence. Our mission includes
                fostering a culture of innovation in education. We encourage our
                partners to adopt innovative teaching methods, leverage
                technology, and embrace progressive approaches that respond to
                the evolving needs of learners and the workforce
              </h1>
            </div>
          </div>
          <div className=" flex items-start gap-10 ">
            <div className=" flex flex-col gap-4 mb-10 ">
              <h1 className=" text-xl font-medium">Elements of the vision</h1>
              <h1 className=" md:w-[1000px] text-justify">
                Transformative Learning Experiences: Central to our vision is
                the concept of transformative learning experiences. We envision
                accredited institutions as pioneers in providing educational
                experiences that go beyond traditional paradigms. These
                experiences empower learners to not only acquire knowledge but
                also develop critical thinking skills, a global perspective, and
                a sense of responsibility towards society.
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                Preparation for Success in a Dynamic World: A key aspect of our
                vision is preparing learners for success in a dynamic world.
                This involves equipping them with the skills, knowledge, and
                values necessary to navigate the challenges and opportunities
                presented by a rapidly evolving global landscape. Our partners
                play a pivotal role in shaping graduates who are adaptable,
                innovative, and socially responsible.
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                Continuous Evolution and Adaptation: Our vision recognizes that
                the education landscape is in constant flux. As a global leader,
                we anticipate and embrace change. We envision IBPD as an
                organization that continuously evolves and adapts to emerging
                trends, ensuring that our accreditation processes remain
                relevant and impactful in a dynamic educational environment
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                Empowering Institutions for Global Impact: A cornerstone of our
                vision is the empowerment of our partners to have a global
                impact. We envision accredited institutions as catalysts for
                positive change, not only within their local communities but on
                a global scale. Through our accreditation, we aim to facilitate
                collaborations, knowledge-sharing, and initiatives that
                contribute to the advancement of education worldwide.
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                Leadership in Educational Standards:  Being a global leader
                means setting benchmarks in educational standards. We envision
                IBPD as an organization that not only upholds the highest
                standards but actively contributes to shaping global educational
                standards. This leadership role involves participating in
                international discussions, collaborating with educational
                bodies, and influencing the direction of educational policies on
                a global level.
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                Alignment with IBPD Values:  The vision is not only a projection
                of the future but a reflection of the values that guide IBPD.
                These values include a commitment to excellence, integrity,
                collaboration, diversity, and a belief in the transformative
                power of education
              </h1>
              <h1 className=" md:w-[1000px] text-justify">
                The synergy between our mission and vision is crucial. The
                mission outlines the actionable steps we take today, while the
                vision paints a vivid picture of the future we aim to create.
                Together, they form a harmonious framework that guides IBPD in
                its journey of nurturing excellence in education globally. In
                conclusion, our mission and vision are not static declarations
                but living principles that drive every facet of IBPD.
              </h1>

              <h1 className=" md:w-[1000px] text-justify font-semibold">
                We invite learning centers, Scholars, learners, and stakeholders
                to join us in this transformative journey.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutLanding;
