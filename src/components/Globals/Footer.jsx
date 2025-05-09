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
    <footer className="w-full py-6 lg:pt-16 bodyBg

  ">
   
      <div className={`grid grid-cols-1  md:grid-cols-3 gap-3 text-md lg:text-lg  ${styles.paddingHorizontal} text-white bg-purple w-full rounded p-3 py-10`}>
        
        <div className="flex  gap-4 md:border-r md:border-r-gray-600">
            <div className=" flex items-center justify-center  h-[50px] w-[50px] sm:rounded-full sm:border md:border-purple md:rounded-full md:border sm:border-gray-600 lg:border lg:border-gray-600 border rounded-full border-gray-600">
            <FiMapPin className=" cursor-pointer text-2xl" />
            </div>
            <div><h1 className="font-semibold text-lg">Our Address</h1>
            <p>No.332, IInd Floor, </p>
            <p>Arcot Road, Vadapalani,</p>
            <p>Chennai - 600026.</p>  
            </div>
        </div>
        <div className="flex gap-4 md:border-r md:border-r-gray-600">
          <div className=" flex items-center justify-center   h-[50px] w-[50px] sm:rounded-full sm:border md:border-purple md:rounded-full md:border sm:border-gray-600 lg:border lg:border-gray-600 border rounded-full border-gray-600">
            <FiPhone className=" cursor-pointer text-2xl" />
          </div><div><h1 className="font-semibold text-lg">Call / WhatsApp</h1>
            <p>+91 8939072777
               </p>
              
               </div>
        </div>
        <div className="flex  gap-4">
          <div className=" flex items-center justify-center  h-[50px] w-[50px] sm:rounded-full sm:border md:border-purple md:rounded-full md:border sm:border-gray-600 lg:border lg:border-gray-600 border rounded-full border-gray-600">
            <FiMail className=" cursor-pointer text-2xl" />
          </div><div><h1 className="font-semibold text-lg">Our Mail</h1>
            <p>mybayindia@gmail.com</p></div>
        </div>

      </div>

      <div
        className={`w-full grid-1 grid   md:grid-cols-2 lg:grid-cols-4 mt-10 gap-12 px-5 ${styles.paddingHorizontal}`}
      >
        <div className="flex flex-col gap-y-1  ">
          <div className="  ">
            {/* <CgIfDesign className="text-4xl text-yellow-500" />
            <h1 className="uppercase font-semibold text-3xl">solar</h1> */}
            <img
            src="https://api.shivyantra.com/uploads/mybay_logo_2_PNG_41e0efb903.png"
            className="h-[70px] sm:h-20 md:h-20 "
            alt="MyBay"
            loading="eager"/>

          </div>
          <div className="flex flex-col gap-y-1 ">
            <p className=" text-sm font-bold mt-3  ">Charge Your Future with  MyBay</p>
            {/* <Link to="/" className="text-md lg:text-lg font-semibold tracking-normal">
              3538 Torrance Blvd, Torrance, CA 90503, USA
            </Link>
            <Link to="/" className="text-md lg:text-lg font-semibold tracking-normal">
              +1 123 456 7890
            </Link>
            <Link to="mailto:info@example.com" className="text-md lg:text-lg font-semibold tracking-normal">
              info@example.com
            </Link>
            <Link to="/" className="text-md lg:text-lg font-semibold tracking-normal">
              Visit Our Store
            </Link> */}
          </div> 
        </div>
        <div className="flex flex-col gap-y-8  ">
          <h1 className="uppercase font-bold text-lg lg:text-xl text-purple">Useful Links</h1>
          <div className="flex flex-col gap-y-2 ">
            <Link to="/" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
              Home
            </Link>
            {/* <Link to="/products" className="text-md lg:text-lg font-semibold tracking-normal">
              Products
            </Link> */}
             <Link to="/services" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple ">
             Services
            </Link>
            <Link to="/about-us" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
              About Us
            </Link>
           
            <Link to="/contact-us" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
              Contact Us
            </Link>
          </div>
        </div>
        <div className=" flex flex-col gap-y-8  ">
          <h1 className="uppercase font-bold text-lg lg:text-xl text-purple">Solutions</h1>
          <div className="flex flex-col gap-y-2">
            <Link to="/services" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
            Residential Solar
            </Link>
            <Link to="/services" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
             Industrial Solar
            </Link>
            <Link to="/services" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
             Institution Solar
             </Link>
            <Link to="/services" className="text-md lg:text-lg font-semibold tracking-normal  hover:text-purple">
             Commercial Solar 
            </Link>
            
           
           
          </div>
        </div>
        <div className="flex flex-col gap-y-8  ">
          <h1 className="uppercase font-bold text-lg lg:text-xl text-purple">Stay In Touch</h1>
          {/* <p className="text-md lg:text-lg font-semibold tracking-normal">
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
        <p className="text-base md:text-md lg:text-lg font-semibold">
          Copyright © 2025 MyBay
        </p>
        <p className="text-base md:text-md lg:text-lg font-semibold">Designed by JGN Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
