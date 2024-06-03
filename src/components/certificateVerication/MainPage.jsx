import React, { useState } from "react";
import Navbar from "../Navbar";
import { TextField } from "@mui/material";
import Footer from "../Footer";
import { MdOutlineCloudUpload } from "react-icons/md";
import certificate from "../../assets/certificarte.jpg";
import { IoIosCloseCircle } from "react-icons/io";

function MainPage() {
  const [isSubmitted, setIsSumbitted] = useState(false);
  const [id, setId] = useState("");
  const handleClick = () => {
    if (id === "") {
      alert("please provide your certificate ID");
    } else {
      setIsSumbitted(!isSubmitted);
    }
  };

  return (
    <div>
      <div className=" w-full min-h-screen flex flex-col gap-20">
        <Navbar />
        <div className=" flex flex-col gap-10 md:px-20 pb-10 items-center ">
          <div className=" w-full h-full flex items-start justify-center md:px-20">
            <div className=" w-full flex flex-col items-center gap-5">
              <h1 className="text-2xl md:text-5xl font-bold text-black uppercase w-full text-center">
                Verify you certificate
              </h1>
              <div className=" w-full h-auto flex justify-center items-center gap-2   py-5 px-5 rounded-xl">
                <TextField
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  size=""
                  label="Enter your certificate ID"
                />
                <div className=" w-32 h-14 bg-black flex items-center justify-center text-white rounded-md">
                  <h1
                    onClick={handleClick}
                    className=" flex items-center gap-3"
                  >
                    Submit <MdOutlineCloudUpload />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {isSubmitted && (
            <div className=" flex flex-col gap-2 w-1/2 items-end">
              <div
                onClick={() => setIsSumbitted(!isSubmitted)}
                className="  cursor-pointer"
              >
                <h1>
                  <IoIosCloseCircle className=" text-3xl" />
                </h1>
              </div>
              <div className=" w-full flex justify-center  rounded-2xl">
                <img src={certificate} alt="" width={800} />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
