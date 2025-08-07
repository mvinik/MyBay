import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";

import CategoryGrid from "../components/Home/CategoryGrid";

import Footer from "../components/Globals/Footer";
import { styles } from "../styles/styles";
import FAQAccordion from "../components/Home/FAQAccordion";
import GallerySlider from "../components/Home/Gallery";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Testimonial from "../components/Home/Testimonial";
import HomeNavbar from "../components/Home/HomeNavbar";
import b1 from '/assets/b1.jpg'
import HowIW from "../components/Home/HowIW";
import SolarCalculator from "../components/Home/SolarCalculator";

const Home = () => {
  useEffect(() => {
    document.title = "Home - MyBay ";
  }, []);

  const location=useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);

  },[location])

  return (
    <>
      <Helmet>
        <title>Home - MyBay</title>
        <meta name="description" content="MyBay offers solar panel solutions for homes and businesses. Save money and go green today!" />
      </Helmet>


      <HomeNavbar />
      <Hero />
      {/* <NewCollection /> */}
      {/* Why Solar Section */}

      {/* <SolarCalculator/> */}
      <section
        className={`${styles.paddingHorizontal} w-full py-6 lg:py-12 flex flex-col bodyBg  gap-y-8`}>
        <div data-aos="fade-up"  className="flex items-center justify-center gap-x-3 py-5">
          <div className="border w-24 border-purple" />
          <p className="text-purple font-bold text-xl md:text-4xl uppercase text-center">
            Why Choose Mybay?
          </p>
          <div className="border w-24 border-purple" />
        </div>

        <div className=" flex flex-col  ">
          <p className="text-lg justify-center items-center py-6">At Mybay, we believe in delivering more than just solar panels; we deliver a comprehensive energy solution that is both reliable and forward-thinking. Our premium systems combine cutting-edge technology with eco-conscious design to provide a clean, sustainable energy source that works with your lifestyle.</p>
          {/* <ul>
          <li><h1 className="font-semibold text">	Smarter Solar Tech </h1>
          <p>– Powered by AI, optimized for performance.</p></li>

          <li><h1>	Seamless Integration  </h1>
          <p>– Designed to fit your home’s aesthetic without compromise.</p></li>

          <li><h1>	Sustainable Energy </h1>
          <p>– Lower your carbon footprint and your bills.</p></li>
        </ul> */}
        </div>


        <div className="flex flex-col ">

          {/* Save on Electricity */}
          <div className="grid grid-cols-1 lg:grid-cols-2    w-full rounded-2xl  transition duration-300">
            <div className="w-full  px-0 lg:px-5  py-5" data-aos="fade-up-right">
              <p className=" mb-4"><h3 className="text-2xl md:text-3xl text-purple font-bold mb-1 " >Smarter Solar Tech </h3>
                <h4 className="text-lg font-semibold">– Powered by AI, optimized for performance.</h4></p>
              <p className="text-black leading-7 2xl:text-lg" >
                Solar energy significantly reduces your monthly power bills. By installing a solar power system, you generate your own electricity from sunlight, decreasing your dependence on the grid.
                Over time, this can lead to <strong>savings of up to 70%</strong> on your utility costs. Whether you're a homeowner or a business, this financial benefit adds up fast, especially as electricity rates continue to rise.
                Plus, many regions offer <strong>net metering</strong>, allowing you to sell unused power back to the grid — putting money back in your pocket.
              </p></div>
            <div className="w-full  px-0 lg:px-5 py-5" data-aos="fade-up-left">
              <img
                className="object-cover w-full "
                src="\assets\b1.jpg" alt="Solar Panel" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2    w-full rounded-2xl  transition duration-300">
            <div className="w-full  px-0 lg:px-5  py-5" data-aos="fade-up-right">
              <img
                className="object-cover w-full"
                src="\assets\b2.jpg" alt="Solar Panel" />
            </div>
            <div className="w-full  px-0 lg:px-5  py-5" data-aos="fade-up-left">
              <p className=" mb-4"><h3 className="text-2xl md:text-3xl text-purple font-bold mb-1" >Seamless Integration
              </h3>
                <h4 className="text-lg font-semibold">– Designed to fit your home’s aesthetic without compromise.</h4></p>
              <p className="text-black leading-7 2xl:text-lg">
                Eco-FriendlySwitching to solar is a powerful step toward environmental responsibility. Solar power is a 100% renewable energy source, meaning it doesn’t emit greenhouse gases or air pollutants.
                Unlike fossil fuels, it doesn’t deplete Earth’s natural resources. By going solar, you can lower your <strong>carbon footprint</strong> dramatically — every solar-powered home offsets tons of CO₂ annually.
               
              </p></div>

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2    w-full rounded-2xl transition duration-300">
            <div className="w-full  px-0 lg:px-5 py-5" data-aos="fade-up-right">
              <p className=" mb-4"><h3 className="text-2xl md:text-3xl text-purple font-bold mb-1" >Sustainable Energy
              </h3>
                <h4 className="text-lg font-semibold"> – Lower your carbon footprint and your bills.</h4></p>
              <p className="text-black leading-7 2xl:text-lg">
                Installing solar panels can <strong>increase your property's market value</strong>. Homes and commercial buildings equipped with solar systems are seen as modern, efficient, and eco-conscious —
                qualities that buyers and tenants value. In many cases, solar-equipped properties sell faster and at a higher price.
                In addition to reducing future energy bills, it’s a smart real estate investment that pays off both now and later.
              </p></div>
            <div className="w-full  px-0 lg:px-5  py-5" data-aos="fade-up-left">
              <img
                className="object-cover w-full"
                src="https://img.freepik.com/premium-photo/photovoltaic-modules-renewable-energy_1417-6803.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740" alt="Solar Panel" />
            </div>
          </div>


        </div>
      </section>
      <HowIW />


      <CategoryGrid />

      {/* <WhyChooseUs/> */}

      <FAQAccordion />

      <GallerySlider />

      <Testimonial />

      <Footer />
    </>
  );
};

export default Home;
