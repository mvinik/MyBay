import React from "react";
import { styles } from "../../styles/styles";
import Navbar from "../Globals/Navbar";
import HomeNavbar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Nav = useNavigate()
  return (


    <div data-aos="fade-down" 
      className={`home-hero   w-full sm:h-screen h-[60vh] flex flex-col ${styles.paddingHorizontal} gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-start  `}
    >
      {/* <div className="flex items-center justify-start gap-x-3">
          <div className="border w-10 border-purple" />
          <p className="text-purple font-normal text-xl">
            <b>SOLAR PANEL STORE</b>
          </p>
        </div> */}
        
      <h2 data-aos="fade-down"  className="text-purple tracking-wide font-bold text-2xl md:text-4xl lg:text-6xl leading-snug  ">
      MYBAY – Powering a Smarter 
      Tomorrow with Solar Energy
      </h2>
      <p className="text-white font-medium text-sm md:text-base leading-5 md:leading-7 lg:w-3/5">

      </p>
      <div data-aos="fade-down" >
        <button
          onClick={() => { Nav("/contact-us") }}
          className="bg-purple py-2 px-4 md:py-5 md:px-10 tracking-widest uppercase text-xs md:text-lg font-bold text-white">
          Contact Now
        </button>
      </div>
    </div>

  );
};

export default Hero;
