import React, { useEffect } from "react";
import CommonHeader from "../components/Globals/CommonHeader";
import SubscribeSection from "../components/Home/SubscribeSection";
import Contact from "../components/ContactUs/Contact";
import ContactForm from "../components/ContactUs/ContactForm";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import { styles } from "../styles/styles";
const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact - Furniture Store';
  }, []); 
  return (
    <div>
    <div className={`${styles.paddingHorizontal} py-6 lg:py-10 `}>
            <div className="flex flex-col gap-y-6 justify-start items-center text-center">
              <h1 className="font-bold text-4xl">Contact Us</h1>
              <p className="text-gray-500 text-base leading-7 lg:w-4/5 font-medium">
              Have questions or ready to go solar? We’re here to help you every step of the way. Reach out to
  our expert team for personalized support, quotes, or consultations tailored to your energy needs.
  Whether it's a simple inquiry or a full project discussion, we’re just a message or call away.

              </p>
            </div>
          </div>
      <Contact/>
      <TestimonialsSection/>
      {/* <ContactForm/> */}
      {/* <SubscribeSection /> */}
    </div>
  );
};

export default ContactUs;
