import React from "react";
import { styles } from "../../styles/styles";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";
import { FiMail} from 'react-icons/fi';

const Contact = () => {
  return (
    <section className={`${styles.paddingHorizontal} py-6 lg:py-20 bodyBg`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div data-aos="fade-up-right"
        className="col-span-2 lg:col-span-1 flex gap-x-2 lg:gap-x-4">
          <div>
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <FaLocationDot className="text-purple text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="text-purple uppercase font-semibold text-xs">
             Office
            </p>
            <p className="text-xl text-black font-bold">
            Mybay, No.332, IInd Floor, Arcot Road, Vadapalani, Chennai - 600026.
            </p>
            {/* <p className="text-black text-base font-medium leading-7">
              Posuere sagittis ultricies enim massa nisi neque augue in
              condimentum lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </p> */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-14 items-start lg:items-center">
              <div className="flex items-center gap-x-6">
                <FaFacebook className="hover:text-purple transition-all duration-200 cursor-pointer" />
                <FaTwitter className="hover:text-purple transition-all duration-200 cursor-pointer" />
                <FaYoutube className="hover:text-purple transition-all duration-200 cursor-pointer" />
                <FaInstagram className="hover:text-purple transition-all duration-200 cursor-pointer" />
              </div>
              <div>
                {/* <Link
                  to="/"
                  className="uppercase text-xs font-medium hover:text-purple flex items-center gap-x-4"
                >
                  <FaLocationArrow className="hover:text-purple transition-all duration-200 cursor-pointer text-lg" />
                  Get Directions
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left"
        className="col-span-2 lg:col-span-1 lg:px-40">
          <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <IoCall className="text-base text-purple" />
            </div>
            <div>
              <p className="text-purple uppercase font-semibold text-xs">
                call us
              </p>
              <p className="text-lg text-black font-bold">+91 8939072777</p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <MdOutlineSupportAgent className="text-xl text-purple" />
            </div>
            <div>
              <p className="text-purple uppercase font-semibold text-xs">
               OFFICE
              </p>
              <p className="text-lg text-black font-bold">
              044 - 4213 4213
              </p>
            </div>
          </div>
          {/* <div className="flex items-start gap-x-4 border-b py-4">
            <div>
              <IoMdPricetags className="text-lg text-purple" />
            </div>
            <div>
              <p className="text-purple uppercase font-semibold text-xs">
                SALES
              </p>
              <p className="text-lg text-black font-bold">sales@email.com</p>
            </div>
          </div> */}
          <div className="flex items-start gap-x-4 py-4">
            <div>
           
                 <FiMail className=" text-xl text-purple" />
            </div>
            <div>
              <p className="text-purple uppercase font-semibold text-xs">
          MAil ID
              </p>
              <p className="text-lg text-black font-bold">
              mybayindia@gmail.com
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <div data-aos="fade-up" className="w-full">
      <iframe
      className="mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7610711104744!2d80.21254447575778!3d13.050874787271859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f622160271%3A0x3149fc03560d447!2sJGN%20Technologies!5e0!3m2!1sen!2sin!4v1743079683877!5m2!1sen!2sin"
          width="100%"
          height="400"
        
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
     
    </section>

  );
};

export default Contact;
