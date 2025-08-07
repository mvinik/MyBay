import React, { useState } from "react";
import { styles } from "../../styles/styles";

import { CgIfDesign } from "react-icons/cg";
import { BsFillBasketFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SiKamailio } from "react-icons/si";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav
      className={`w-full h-20 ${styles.paddingHorizontal} p-2  flex items-center justify-between border-b relative`}
    >
      <Link to="/" className="flex items-center gap-x-1">
        <img
          className="h-16  sm:h-28"
          src='/assets/mybay logo 2 PNG.png'
          alt="MyBay logo"
        />
        {/* <h1 className="uppercase font-semibold text-xl">Solar Panel</h1> */}
        {/* <SiKamailio className="text-yellow-500 text-8xl"/> */}
      </Link>
      <ul className="hidden  lg:flex items-center gap-x-5">
        <li className="text-lg font-medium hover:text-white  hover:bg-purple rounded py-2 px-3">
          <a href="/">Home</a>

        </li>

        <li className="text-lg font-medium hover:text-white  hover:bg-purple rounded py-2 px-3">

          <a href="/services">Services</a>
        </li>
        <li className="text-lg font-medium hover:text-white  hover:bg-purple rounded py-2 px-3">

          <a href="/about-us">About Us</a>
        </li>
        <li className="text-lg font-medium hover:text-white  hover:bg-purple rounded py-2 px-3">

          <a href="/contact-us">Contact Us</a>
        </li>
        <li className="text-lg font-medium hover:text-white  hover:bg-purple rounded py-2 px-3">
  <a href="/solar-calculator">Calculator</a>
        </li>
      </ul>
      <div className="flex items-center lg:hidden gap-x-6">

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
              <li>
                <Link to={'/'}>Home</Link>

              </li>

              <li>
                <Link to={'/services'} smooth={true} duration={500}>Services</Link>

              </li>
              <li>
                <Link to={'/about-us'}>About Us</Link>

              </li>
              <li>
                <Link to={'/contact-us'}>Contact Us</Link>

              </li>
               <li>
                <Link to={'/solar-calculator'}>Calculator</Link>

              </li>
              <li>
                <a href={'#testimonial'}>Testimonial</a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

