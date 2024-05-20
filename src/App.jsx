import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import AboutUsPage from "./pages/AboutUsPage";
import PartnerPage from "./pages/PartnerPage";
import Programs from "./components/Programs";
import Contactus from "./components/Contactus";
import PartnerLogos from "./components/PartnerLogos";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <div className=" ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/logoscroll" element={<PartnerLogos />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
