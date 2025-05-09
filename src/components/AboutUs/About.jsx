import React from "react";
import { styles } from "../../styles/styles";

const About = () => {
  return (
    <div className={`${styles.paddingHorizontal} py-6 lg:py-16 bodyBg flex flex-col gap-y-6 lg:gap-y-12`}>
      <p className="text-base leading-7 font-medium text-black">
        Harness the power of the sun with our state-of-the-art solar solutions. Whether you're looking to reduce energy costs, increase sustainability, or take control of your energy future, our solar panels provide a reliable and eco-friendly energy source that can transform how you power your home or business. Join the movement towards a greener tomorrow with our advanced solar technology and expert installation services.
      </p>
      <div data-aos="fade-up"  className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
        <div >
          <p className="text-base leading-7 pb-2 font-medium text-black">
            Our solar panels are designed to maximize energy efficiency, reduce your carbon footprint, and offer long-lasting value. With tailored solutions for homes and businesses, our systems are built to withstand harsh weather conditions and provide reliable energy for years to come. Make a positive impact on the environment while saving on your energy bills.
          </p>
          <p className="text-base leading-7 font-medium text-black">
            From initial consultation to seamless installation, we handle every step of the process with precision and care. Our team of certified experts ensures that your system is optimized for your energy needs, ensuring that you can enjoy the full benefits of solar energy without any hassle. Choose us to make your transition to renewable energy simple, cost-effective, and impactful.
          </p>
        </div>
        <div className="col-span-2 lg:px-8 lg:pt-3 lg:col-span-1" >
          <img
            src={'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D&w=500'}
            alt="Solar panels"
            className="drop-shadow-2xl brightness-90"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
