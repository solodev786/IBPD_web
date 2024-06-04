import React, { useState } from "react";
import Navbar from "../Navbar";
import { TextField } from "@mui/material";
import Footer from "../Footer";
import { MdOutlineCloudUpload } from "react-icons/md";
import certificate from "../../assets/certificate.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import markSheet from "../../assets/marksheet.jpg";

function MainPage() {
  const [isSubmitted, setIsSumbitted] = useState(false);

  const [lock, setLock] = useState("210886");

  const [id, setId] = useState("");
  const handleClick = () => {
    if (id !== lock) {
      return alert("you entered a wrong credential");
    }
    if (id === "") {
      alert("please provide your certificate ID");
    } else {
      setIsSumbitted(!isSubmitted);
    }
  };

  return (
    <div>
      <div
        className=" w-full min-h-screen flex flex-col gap-20 bg-gray-200 bg-cover bg-opacity-50"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1681505531034-8d67054e07f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) `,
        }}
      >
        <Navbar />
        <div className=" flex flex-col gap-10 md:px-20 pb-10 items-center bg-opacity-40">
          <div className=" w-full h-full flex items-start justify-center md:px-20">
            <div className=" w-full flex flex-col items-center gap-5">
              <h1 className="text-2xl md:text-5xl font-bold text-white uppercase w-full text-center">
                Verify you certificate
              </h1>
              <div className="  w-full h-auto flex justify-center items-center gap-2   py-5 px-5 rounded-xl">
                {/* <TextField
                  helperText="Sample certificate for pilot markets"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  size=""
                  label="Enter your certificate ID"
                /> */}
                <div className=" flex flex-col gap-2">
                  <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                    placeholder="Enter your Certificate ID"
                    className=" bg-white h-14 rounded-md w-full md:w-96 px-5"
                  />
                  <h1 className=" text-white text-xs md:text-sm">
                    Sample certificate for pilot markets
                  </h1>
                </div>
                <div className=" w-32 h-14 mt-[-27px]  bg-white flex items-center justify-center text-black rounded-md cursor-pointer">
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
            <div className=" flex flex-col gap-2 w-2/2 items-end">
              <div
                onClick={() => setIsSumbitted(!isSubmitted)}
                className="  cursor-pointer"
              >
                <h1>
                  <IoIosCloseCircle className=" text-3xl text-white" />
                </h1>
              </div>
              <div className=" w-full flex justify-center gap-5 items-center  rounded-2xl">
                <img src={certificate} alt="" width={500} />
                <img src={markSheet} alt="" width={500} />
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
