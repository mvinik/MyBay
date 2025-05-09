import React, { useEffect } from "react";
import Contact from "../components/ContactUs/Contact";
import { useLocation } from "react-router-dom";
import { styles } from "../styles/styles";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {

  useEffect(() => {
    document.title = 'Contact - MyBay  ';
  }, []);

  const location=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);

  },[location])

  return (
    <div>

      <Helmet>
        <title>Contact Us - MyBay </title>
        <meta name="description" content="Get in touch with MyBay. We’re here to help with your solar energy needs." />
      </Helmet>


      <div className={`${styles.paddingHorizontal} py-6 lg:py-10 bodyBg`}>
        <div className="flex flex-col gap-y-6 justify-start items-center text-center">
          <h1 className="font-bold text-4xl">Contact Us</h1>
          <p className="text-black text-base leading-7  font-medium">
            Have questions or ready to go solar? We’re here to help you every step of the way. Reach out to
            our expert team for personalized support, quotes, or consultations tailored to your energy needs.
            Whether it's a simple inquiry or a full project discussion, we’re just a message or call away.

          </p>
        </div>
      </div>
      <Contact />
      {/* <TestimonialsSection/> */}
      {/* <ContactForm/> */}
      {/* <SubscribeSection /> */}
    </div>
  );
};

export default ContactUs;
