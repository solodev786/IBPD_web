import bg from "../../assets/homebg.webp";
import bookMark from "../../assets/bookmark.png";
import moblieBg from "../../assets/mobile_homebg.webp";
import Navbar from "../Navbar";
import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

function LandingPage() {
  const isMobile = useMediaQuery("(max-width: 639px)");

  return (
    <div className="md:w-full bg-black relative">
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-full h-screen md:h-[1000px]"
        style={{
          backgroundImage: isMobile ? `url(${moblieBg})` : `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>
      <div className="relative z-10 w-full h-screen md:h-[1000px]">
        <Navbar />

        <div className="h-3/4 md:h-2/4 flex items-center justify-between">
          <div className="w-96 md:flex md:justify-start md:w-[600px] md:px-10 md:h-auto pb-10 bg-black bg-opacity-50 flex">
            <div className="flex flex-col gap-2 text-white">
              <img
                className="hidden md:block md:drop-shadow-lg"
                src={bookMark}
                width={30}
                alt=""
              />
              <div className="gap-2 px-10 md:px-0 pb-10 flex flex-col md:gap-5 py-5 md:py-0">
                <motion.div
                  initial={{ x: -200, opacity: -10 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex md:text-left flex-col text-2xl md:text-4xl md:tracking-wider md:leading-[45px] font-semibold">
                    <h1>Ignite your career,</h1>
                    <h1>illuminate your future</h1>
                  </div>
                </motion.div>

                <h1 className="w-[320px] text-sm md:text-base md:w-[500px] md:text-justify">
                  Embark on a transformative experience with IBPD where
                  expertise meets aspiration, crafting futures of unparalleled
                  success. Your success story starts here
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
