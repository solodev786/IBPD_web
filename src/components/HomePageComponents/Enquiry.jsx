import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import React, { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import emailjs from "emailjs-com";

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    to_name: "IBPD", // You can set a default value or change dynamically
    from_name: "", // Set it as the user's name or leave it empty
  });

  formData.from_email = formData.email;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      from_name: formData.name, // Set from_name to the user's name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_h9osk7f",
        "template_91bdiom",
        formData,
        "CWNvrZwvNHhOWoN6L"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            name: "",
            email: "",
            mobile: "",
            message: "",
          });
          // Handle success
        },
        (error) => {
          console.error("Email sending failed:", error);
          // Handle error
        }
      );
  };

  const isMobile = useMediaQuery("(max-width: 639px)");
  if (isMobile) {
    return (
      <div className=" w-full h-auto px-5 py-10 text-white">
        <div className=" w-full h-auto px-5 py-10 bg-[#303030] rounded-md">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-2xl font-semibold">Enquire now!</h1>
            <h1>
              For inquiries, collaboration opportunities, or more information,
              please contact us at Your Contact Information.
            </h1>
            <TextField
              InputProps={{
                style: {
                  color: "white",
                  border: "solid 1px white",
                  height: "50px",
                }, // Change 'red' to your desired text color
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Change 'white' to your desired label color
                },
              }}
              label="Your name"
            />
            <TextField
              InputProps={{
                style: {
                  color: "white",
                  border: "solid 1px white",
                  height: "50px",
                }, // Change 'red' to your desired text color
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Change 'white' to your desired label color
                },
              }}
              label="Email"
            />
            <TextField
              InputProps={{
                style: {
                  color: "white",
                  border: "solid 1px white",
                  height: "50px",
                }, // Change 'red' to your desired text color
              }}
              InputLabelProps={{
                style: {
                  color: "white", // Change 'white' to your desired label color
                },
              }}
              label="Mobile no"
            />

            <div className=" w-full h-12 rounded-md bg-white flex items-center justify-center">
              <h1 className=" text-black font-semibold">Submit</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full h-auto flex items-center justify-center text-white">
      <div className=" my-10 mt-20">
        <div className=" w-[1000px]  px-16 py-16 bg-[#202020] rounded-xl">
          <div className=" flex flex-col gap-10">
            <div className=" flex flex-col gap-2">
              <h1 className=" text-3xl font-semibold">Enquire Now!</h1>
              <h1 className=" w-[450px]">
                For inquiries, collaboration opportunities, or more information,
                please contact us at Your Contact Information.
              </h1>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex gap-5 items-center">
                <TextField
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  label="Your name"
                  InputProps={{
                    style: {
                      color: "white",
                      border: "solid 1px white",
                      height: "50px",
                      width: "250px",
                    }, // Change 'red' to your desired text color
                  }}
                  InputLabelProps={{
                    style: {
                      color: "white", // Change 'white' to your desired label color
                    },
                  }}
                />
                <TextField
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  InputProps={{
                    style: {
                      color: "white",
                      border: "solid 1px white",
                      height: "50px",
                      width: "250px",
                    }, // Change 'red' to your desired text color
                  }}
                  InputLabelProps={{
                    style: {
                      color: "white", // Change 'white' to your desired label color
                    },
                  }}
                />
                <TextField
                  value={formData.mobile}
                  onChange={handleChange}
                  name="mobile"
                  label="Mobile No"
                  InputProps={{
                    style: {
                      color: "white",
                      border: "solid 1px white",
                      height: "50px",
                      width: "250px",
                    }, // Change 'red' to your desired text color
                  }}
                  InputLabelProps={{
                    style: {
                      color: "white", // Change 'white' to your desired label color
                    },
                  }}
                />
              </div>
              <textarea
                value={formData.message}
                onChange={handleChange}
                placeholder="message"
                className=" bg-[#202020] text-white px-5 py-5 border border-1 border-white rounded-md w-[790px]"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-32 h-12 text-[#303030] flex items-center justify-center bg-white rounded-sm absolute cursor-pointer"
            >
              <h1>Submit</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
