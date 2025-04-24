import React from "react";
import { styles } from "../../styles/styles";
import { CgIfDesign } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full py-6 lg:pt-16 

  ">
   
      <div className={`grid grid-cols-1  lg:grid-cols-3 gap-3 text-lg  ${styles.paddingHorizontal} text-white bg-purple w-full rounded p-3 py-10`}>
        
        <div className="flex  gap-4 lg:border-r lg:border-r-gray-600">
            <div className=" flex items-center justify-center  h-[50px] w-[50px] rounded-full border border-gray-600">
            <FiMapPin className=" cursor-pointer text-2xl" />
            </div>
            <div><h1>Our Address</h1>
            <p>No.332, IInd Floor, </p>
            <p>Arcot Road, Vadapalani,</p>
            <p>Chennai - 600026.</p>  
            </div>
        </div>
        <div className="flex gap-4 lg:border-r lg:border-r-gray-600">
          <div className=" flex items-center justify-center   h-[50px] w-[50px] rounded-full border border-gray-600">
            <FiPhone className=" cursor-pointer text-2xl" />
          </div><div><h1>Call Us</h1>
            <p>+91 8939072777
               </p>
              
               </div>
        </div>
        <div className="flex  gap-4">
          <div className=" flex items-center justify-center  h-[50px] w-[50px] rounded-full border border-gray-600">
            <FiMail className=" cursor-pointer text-2xl" />
          </div><div><h1>Our Mail</h1>
            <p>mybayindia@gmail.com</p></div>
        </div>

      </div>

      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 mt-10 gap-6 ${styles.paddingHorizontal}`}
      >
        <div className="col-span-3 flex flex-col gap-y-4 ">
          <div className="  ">
            {/* <CgIfDesign className="text-4xl text-yellow-500" />
            <h1 className="uppercase font-semibold text-3xl">solar</h1> */}
            <img
            src="/assets/mybay logo 2 PNG.png"
            className="h-32 sm:h-48 "
            alt="MyBay"/>

          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className="text-lg lg:text-xl font-bold md:px-5 ">Charge Your Future with  MyBay</p>
            {/* <Link to="/" className="text-lg font-semibold tracking-normal">
              3538 Torrance Blvd, Torrance, CA 90503, USA
            </Link>
            <Link to="/" className="text-lg font-semibold tracking-normal">
              +1 123 456 7890
            </Link>
            <Link to="mailto:info@example.com" className="text-lg font-semibold tracking-normal">
              info@example.com
            </Link>
            <Link to="/" className="text-lg font-semibold tracking-normal">
              Visit Our Store
            </Link> */}
          </div> 
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-bold text-xl">Useful Links</h1>
          <div className="flex flex-col gap-y-2 ">
            <Link to="/" className="text-lg font-semibold tracking-normal  hover:text-purple">
              Home
            </Link>
            {/* <Link to="/products" className="text-lg font-semibold tracking-normal">
              Products
            </Link> */}
            <Link to="/services" className="text-lg font-semibold tracking-normal  hover:text-purple ">
             Services
            </Link>
            <Link to="/about-us" className="text-lg font-semibold tracking-normal  hover:text-purple">
              About Us
            </Link>
            <Link to="/contact-us" className="text-lg font-semibold tracking-normal  hover:text-purple">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-bold text-xl">Solutions</h1>
          <div className="flex flex-col gap-y-2">
            <Link to="/" className="text-lg font-semibold tracking-normal  hover:text-purple">
            Residential Solar
            </Link>
            <Link to="/" className="text-lg font-semibold tracking-normal  hover:text-purple">
             Institution Solar
             </Link>
            <Link to="/" className="text-lg font-semibold tracking-normal  hover:text-purple">
             Commercial Solar 
            </Link>
            <Link to="/" className="text-lg font-semibold tracking-normal  hover:text-purple">
             Industrial Solar
            </Link>
           
           
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-y-8">
          <h1 className="uppercase font-bold text-xl">Stay In Touch</h1>
          {/* <p className="text-lg font-semibold tracking-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
          <div className="flex gap-x-3 gap-y-2 text-white">
            <Link
            target="_blank"
              to="https://www.facebook.com/profile.php?id=100068169407773"
              className="w-10 h-10 flex items-center justify-center bg-purple"
            >
              <FaFacebookSquare className="text-xl" />
            </Link>
            {/* <Link
            target="_blank"
              to="https://www.twitter.com"
              className="w-10 h-10 flex items-center justify-center bg-purple"
            >
              <FaTwitter className="text-xl" />
            </Link> */}
            <Link
            target="_blank"
              to="https://www.youtube.com/@mybay5410"
              className="w-10 h-10 flex items-center justify-center bg-purple"
            >
              <FaYoutube className="text-xl" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/mybayindia/"
              className="w-10 h-10 flex items-center justify-center bg-purple"
            >
              <FaInstagram className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-600 my-4"></div>
      <div
        className={`flex items-center justify-between  ${styles.paddingHorizontal} gap-x-5`}
      >
        <p className="text-base md:text-lg font-semibold">
          Copyright © 2025 MyBay
        </p>
        <p className="text-base md:text-lg font-semibold">Designed by JGN Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
