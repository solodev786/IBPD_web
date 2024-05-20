import img from "../../assets/webp/container_two.webp";
import { useMediaQuery } from "@react-hook/media-query";

function NoMatterHowFar() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  if (isMobile) {
    return (
      <div className=" w-full h-auto">
        <div className=" w-full h-72 ">
          <img className=" w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className=" w-full h-auto py-10 px-10 bg-black text-white">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-2xl font-semibold">
              No matter how far you’ve come, you can always go further
            </h1>
            <h1 className="  ">
              Achieving global recognition and prestige is not just a testament
              to the quality of education provided by accredited institutions
              but also a strategic advantage that opens doors to numerous
              opportunities for learners, faculties and the training partners
              .Join IBPD, where every module, mentor, and connection is
              meticulously designed to redefine what's possible in your
              professional journey. Your potential is limitless, and IBPD is
              here to help you unlock it. Ready to redefine your future? Join
              IBPD and start your transformative professional journey today.
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full h-auto">
      <div className=" flex items-center justify-start">
        <div className=" relative ">
          <svg
            // style={{ transitionDuration: "0.3s" }}
            // ref={conRef}
            xmlns="http://www.w3.org/2000/svg"
            width="750"
            height="550"
            viewBox="0 0 788 523"
            fill="none"
          >
            <g filter="url(#filter0_d_108_600)">
              <path d="M656.245 0H0V515H784L656.245 0Z" fill="black" />
            </g>
            <defs>
              <filter
                id="filter0_d_108_600"
                x="-4"
                y="0"
                width="792"
                height="523"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_108_600"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_108_600"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <div className=" absolute bottom-0  w-full h-full flex items-center justify-start text-white ">
            <div
              // ref={textRef}
              // style={{ transitionDuration: "1.0s" }}
              className=" flex flex-col gap-5 pl-10"
            >
              <div className=" text-4xl font-semibold tracking-wide ">
                <h1>No matter how far </h1>
                <h1>you've come, you </h1>
                <h1>can always go further </h1>
              </div>
              <h1 className="  w-[550px] leading-7 text-justify">
                Achieving global recognition and prestige is not just a
                testament to the quality of education provided by accredited
                institutions but also a strategic advantage that opens doors to
                numerous opportunities for learners, faculties and the training
                partners .Join IBPD, where every module, mentor, and connection
                is meticulously designed to redefine what's possible in your
                professional journey. Your potential is limitless, and IBPD is
                here to help you unlock it. Ready to redefine your future? Join
                IBPD and start your transformative professional journey today.
              </h1>
            </div>
          </div>
        </div>
        <div className=" w-full h-96 bg-white ml-[-130px]">
          <img className=" w-full h-full object-cover" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NoMatterHowFar;
