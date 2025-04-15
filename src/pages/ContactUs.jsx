import React, { useEffect } from "react";
import CommonHeader from "../components/Globals/CommonHeader";
import SubscribeSection from "../components/Home/SubscribeSection";
import Contact from "../components/ContactUs/Contact";
import ContactForm from "../components/ContactUs/ContactForm";
import TestimonialsSection from "../components/Home/TestimonialsSection";

const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact - Furniture Store';
  }, []); 
  return (
    <div>
      <CommonHeader title={"Contact Us"} />
      <Contact/>
      <TestimonialsSection/>
      {/* <ContactForm/> */}
      {/* <SubscribeSection /> */}
    </div>
  );
};

export default ContactUs;
