import { useMediaQuery } from "@react-hook/media-query";
import React from "react";
import ReactPlayer from "react-player/lazy";

function Video() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  if (isMobile) {
    return (
      <div>
        <div className=" my-5 px-10  md:flex items-center gap-10">
          <div className=" ">
            <ReactPlayer
              url="https://videos-cloudfront.jwpsrv.com/661f23d6_34ec61d4833e4909e6fba23d40d97778169c829b/content/conversions/cT8Xt7bd/videos/pdWhQzfv-32853368.mp4"
              playing
              controls
              loop
              volume={0}
              muted
              width={300}
            />
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold text-4xl md:w-[550px]">
              These Are the 5 Most Useful Skills for the Jobs of the Future
            </h1>
            <h1 className=" text-justify text-gray-500 w-full md:w-[500px]">
              Businesses predict 44% of workers’ skills will be disrupted by
              2027 as technology is moving faster than employers can adapt their
              training programmes.Here are 5 skills you might want to polish to
              stay one step ahead.
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" my-20 px-10  md:flex items-center gap-10">
        <div className=" ">
          <ReactPlayer
            url="https://videos-cloudfront.jwpsrv.com/661f23d6_34ec61d4833e4909e6fba23d40d97778169c829b/content/conversions/cT8Xt7bd/videos/pdWhQzfv-32853368.mp4"
            playing
            controls
            loop
            volume={0}
            muted
            width={700}
          />
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-semibold text-4xl md:w-[550px]">
            These Are the 5 Most Useful Skills for the Jobs of the Future
          </h1>
          <h1 className=" text-justify text-gray-500 w-[500px]">
            Businesses predict 44% of workers’ skills will be disrupted by 2027
            as technology is moving faster than employers can adapt their
            training programmes.Here are 5 skills you might want to polish to
            stay one step ahead.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Video;
