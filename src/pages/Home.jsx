import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LandingPage from "../components/LandingPage";
import VideoSection from "../components/VideoSection";
import ProductSection from "../components/ProductSection";

import Features from "../components/Features";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <LandingPage />

      {/* <img src={wave1} alt="wave" /> */}

      <VideoSection />
      {/* <img src={wave2} alt="wave" /> */}
      <Features />
      {/* <img src={wave3} alt="wave" /> */}
      <ProductSection />
      {/* <img src={wave4} style={{ backgroundColor: "#2c2c2c" }} alt="wave" /> */}
    </>
  );
}

export default Home;
