import React, { useEffect } from "react";


import About from "../components/AboutUs/About";
import AboutSection from "../components/AboutUs/AboutSection";


import { styles } from "../styles/styles";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  useEffect(() => {
    document.title = 'About - MyBay';
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us - MyBay</title>
        <meta name="description" content="Learn about our mission to make clean solar energy affordable and accessible." />
      </Helmet>

      <div className={`${styles.paddingHorizontal} py-6 lg:py-10 bodyBg `}>
        <div className="flex flex-col gap-y-6 justify-start items-center text-center">
          <h1 className="font-bold text-4xl">About Us</h1>
          <p className="text-black text-base leading-7 lg:w-4/5 font-medium">
            At MyBay, we believe in shaping a brighter, cleaner future through advanced solar
            technologies. With a passion for sustainability and precision, our team delivers customized
            energy solutions that meet the unique needs of homes, businesses, and industries. We combine
            innovation, trust, and expertise to make solar simple, smart, and accessible for everyone.
          </p>
        </div>
      </div>
      <AboutSection />
      <About />
      {/* <BestQualitySection/> */}
      {/* <TestimonialsSection/> */}
      {/* <SubscribeSection /> */}
    </div>
  );
};

export default AboutUs;
