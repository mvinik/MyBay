import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import NewCollection from "../components/Home/NewCollection";
import ProductGrid from "../components/Home/ProductGrid";
import CategoryGrid from "../components/Home/CategoryGrid";
import BestSeller from "../components/Home/BestSeller";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import SubscribeSection from "../components/Home/SubscribeSection";
import Footer from "../components/Globals/Footer";
import { styles } from "../styles/styles";
import FAQAccordion from "../components/Home/FAQAccordion";
import GallerySlider from "../components/Home/Gallery";
const Home = () => {
  useEffect(() => {
    document.title = "Home - Furniture Store";
  }, []);
  return (
    <>
      <Hero />
      {/* <NewCollection /> */}
        {/* Why Solar Section */}
        <section 
            className={`${styles.paddingHorizontal} w-full py-6 lg:py-12 flex flex-col gap-y-8`}>
        <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
      Solar Panels
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
        Why Go <br /> Solar Panels
        </h2>
        {/* <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all best sellers
        </button> */}
      </div>
  <div className="flex flex-col ">
    
    {/* Save on Electricity */}
    <div className="grid grid-cols-1 md:grid-cols-2  items-center   justify-center  w-full rounded-2xl  transition duration-300">
      <div className="pr-5"><h3 className="text-xl font-bold mb-4">Save on Electricity</h3>
      <p className="text-gray-600 leading-7">
        Solar energy significantly reduces your monthly power bills. By installing a solar power system, you generate your own electricity from sunlight, decreasing your dependence on the grid. 
        Over time, this can lead to <strong>savings of up to 70%</strong> on your utility costs. Whether you're a homeowner or a business, this financial benefit adds up fast, especially as electricity rates continue to rise.
        Plus, many regions offer <strong>net metering</strong>, allowing you to sell unused power back to the grid — putting money back in your pocket.
      </p></div>
      <div>
        <img 
        className="object-cover w-full"
        src="https://img.freepik.com/premium-photo/high-voltage-pylons-with-electric-power-lines-transfering-electricity-from-solar-photovoltaic-sells-sunrise-production-sustainable-energy-concept_127089-16130.jpg?w=740" alt="" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  items-center  justify-between  w-full rounded-2xl  transition duration-300">
    <div>
        <img 
        className="object-cover w-full"
        src="https://img.freepik.com/free-photo/solar-pannels-wind-power-plant-outside_23-2149352234.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740" alt="" />
      </div>
      <div  className="md:pl-5"><h3 className="text-xl font-bold mb-4">Eco-Friendly</h3>
      
      <p className="text-gray-600 leading-7">
      Eco-FriendlySwitching to solar is a powerful step toward environmental responsibility. Solar power is a 100% renewable energy source, meaning it doesn’t emit greenhouse gases or air pollutants. 
        Unlike fossil fuels, it doesn’t deplete Earth’s natural resources. By going solar, you can lower your <strong>carbon footprint</strong> dramatically — every solar-powered home offsets tons of CO₂ annually. 
        It’s a clean, sustainable way to power your life while helping combat climate change and preserving the planet for future generations.
       </p></div>
      
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  items-center  justify-between  w-full rounded-2xl transition duration-300">
      <div  className="pr-5"><h3 className="text-xl font-bold mb-4">Boost Property Value</h3>
      <p className="text-gray-600 leading-7">
      Installing solar panels can <strong>increase your property's market value</strong>. Homes and commercial buildings equipped with solar systems are seen as modern, efficient, and eco-conscious — 
        qualities that buyers and tenants value. In many cases, solar-equipped properties sell faster and at a higher price. 
        In addition to reducing future energy bills, it’s a smart real estate investment that pays off both now and later.
      </p></div>
      <div>
        <img 
        className="object-cover w-full"
        src="https://img.freepik.com/premium-photo/photovoltaic-modules-renewable-energy_1417-6803.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740" alt="" />
      </div>
    </div>

    
  </div>
</section>

      <CategoryGrid />
      {/* <BestSeller /> */}
     
      {/* <WhyChooseUsSection /> */}

<FAQAccordion/>
<GallerySlider/>
<TestimonialsSection />
   
      {/* <SubscribeSection /> */}
      <Footer />
    </>
  );
};

export default Home;
