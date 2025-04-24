import React, { useState } from "react";
import { CgIfDesign } from "react-icons/cg";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import { BsFillBasketFill } from "react-icons/bs";
import { IoClose, IoMenu } from "react-icons/io5";
import { SiKamailio } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
const HomeNavbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`w-full h-22  ${styles.paddingHorizontal} flex items-center justify-between  shadow-lg shadow-gray-400`}
    >
      <Link to="/" className="flex items-center gap-x-1">
        <img
          className="h-20 sm:h-20 md:h-28 lg:h-30"
          src='/assets/mybay logo 2 PNG.png'
          alt="Mybay Logo"
        />
        {/* <CgIfDesign className="text-3xl hover:text-purple hover:underline-offset-2" />
        <h1 className="uppercase font-semibold text-xl text-white">SOLAR PANEL</h1> */}
        {/* <SiKamailio className="hover:text-purple hover:underline-offset-2 text-8xl"/> */}
      </Link>
      <ul className="hidden lg:flex text-lg items-center gap-x-10">
        <li>

          <Link
            to="/"
            className="font-bold relative inline-block pb-1 text-black custom-underline hover:text-purple transition-all duration-300  text-[20px] "
          >
            Home
          </Link>
        </li>


        <li>
          <Link
            to="/about-us"
            className=" font-bold hover:text-purple  relative inline-block pb-1 text-black custom-underline transition-all duration-300 text-[20px]"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className=" font-bold hover:text-purple  relative inline-block pb-1 text-black custom-underline transition-all duration-300 text-[20px]"
          >
            Services
          </Link>
        </li>
        <li className="mx-8">
          <Link
            to="/contact-us"
            className="font-bold bg-purple px-4 py-3 text-white rounded-full transition-all duration-300 text-[20px]"
          >
            Contact Us
          </Link>
        </li>
        {/* <li> <a href={'#testimonial'}>Testimonial</a>             
              </li> */}

      </ul>

      {/* <div className=" hidden md:block "> <button className="flex items-center gap-2 text-white bg-purple hover:bg-purple px-4 py-2 rounded">
      <FiPhoneCall className="text-lg" />
      <span className="text-sm font-medium">+91 9087654321</span>
    </button></div> */}
      <button
        className="bg-purple w-8 h-8 lg:hidden flex items-center justify-center"
        onClick={() => setOpenNav(!openNav)}
      >
        <IoMenu className="text-xl" />
      </button>
      <div
        className={`w-full h-screen fixed bg-transparent top-0 left-0 right-0 bottom-0 z-20 flex justify-end ${openNav ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className="bg-white w-3/5 md:w-2/5 h-full shadow-xl p-4">
          <button
            className="bg-purple w-8 h-8 flex items-center justify-center"
            onClick={() => setOpenNav(!openNav)}
          >
            <IoClose className="text-xl" />
          </button>
          <ul className="flex flex-col items-start gap-y-3 mt-8 gap-x-10">
            <li className="hover:hover:text-purple hover:underline-offset-2">
              <a href="/">Home</a>
            </li>

            <li className="hover:hover:text-purple hover:underline-offset-2">
              <a href="/about-us">About Us</a>
            </li>
            <li className="hover:hover:text-purple hover:underline-offset-2">
              <a href="/services">Services</a>
            </li>
            <li className="hover:hover:text-purple hover:underline-offset-2">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
