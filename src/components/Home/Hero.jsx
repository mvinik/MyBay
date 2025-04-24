import React from "react";
import { styles } from "../../styles/styles";
import Navbar from "../Globals/Navbar";
import HomeNavbar from "./HomeNavbar";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const Nav = useNavigate()
  return (


    <div
      className={`home-hero  w-full h-[calc(50vh-5rem)] flex flex-col ${styles.paddingHorizontal} gap-y-4 md:gap-y-6 lg:gap-y-8 justify-center items-start  `}
    >
      {/* <div className="flex items-center justify-start gap-x-3">
          <div className="border w-10 border-purple" />
          <p className="text-purple font-normal text-xl">
            <b>SOLAR PANEL STORE</b>
          </p>
        </div> */}
      <h1 className="text-purple tracking-wide font-bold text-2xl md:text-4xl lg:text-6xl">
        Mybay – Powering a Smarter Tomorrow with Solar Energy
      </h1>
      <p className="text-white font-medium text-sm md:text-base leading-5 md:leading-7 lg:w-3/5">

      </p>
      <div>
        <button
          onClick={() => { Nav("/contact-us") }}
          className="bg-purple py-4 px-8 uppercase text-sm font-medium text-white">
          Contact Now
        </button>
      </div>
    </div>

  );
};

export default Hero;
