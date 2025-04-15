import React, { useState } from "react";
import TestimonialCard from "../components/Home/TestimonialCard";
import TestimonialsSection from "../components/Home/TestimonialsSection";

const solarPanelData = [
  {
    id: "residential",
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    title: "Residential Solar Panels",
    shortDescription: "Perfect for homeowners looking to save money and go green.",
    fullTitle: "Why Choose Residential Solar Panels?",
    description:
      "Our residential solar systems are designed to deliver maximum efficiency while complementing your home’s aesthetics. Whether you're looking to cut costs, reduce your carbon footprint, or gain energy independence — we've got you covered.",
    featuresTitle: "Key Features",
    features: [
      "Custom Design & Installation: Tailored to fit your roof and home layout.",
      "High Efficiency Panels: Harness more energy with advanced solar cell tech.",
      "Battery Storage Integration: Use solar power day and night, even during outages.",
      "Real-Time Monitoring: Track energy production and consumption easily.",
      "Smart Inverter Technology: Converts power efficiently and safely.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Up to 70% Savings: Slash your energy bills dramatically.",
      "Environmentally Friendly: Reduce your carbon footprint and go green.",
      "Energy Independence: Take control of your energy future.",
      "Government Incentives: Enjoy rebates and tax credits to save more.",
      "Increased Home Value: Boost property value with a green upgrade.",
    ],
  },
  {
    id: "commercial",
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
   
    title: "Commercial Solar Panels",
    shortDescription: "Smart energy solutions for businesses of all sizes.",
    fullTitle: "Why Choose Commercial Solar Panels?",
    description:
      "Commercial solar panels are an excellent investment for businesses seeking long-term cost savings and sustainable branding. Our tailored solutions can power any commercial space with high efficiency and low maintenance.",
    featuresTitle: "Key Features",
    features: [
      "Scalable Installations: From small offices to large warehouses.",
      "Energy Cost Reduction: Lower utility expenses over time.",
      "Custom Layouts: Designed to fit flat rooftops or open land.",
      "Advanced Monitoring: Real-time analytics and performance tracking.",
      "Robust Design: Built to endure commercial wear and tear.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Lower Operating Costs: Cut electricity bills significantly.",
      "Sustainability Credentials: Attract eco-conscious customers and partners.",
      "Quick ROI: Recover your investment in just a few years.",
      "Tax Benefits: Leverage depreciation and energy credits.",
      "Energy Security: Reduce reliance on fluctuating energy rates.",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Solar Panels",
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
   
    shortDescription: "Heavy-duty solar solutions for large-scale industrial applications.",
    fullTitle: "Why Choose Industrial Solar Panels?",
    description:
      "Industrial solar systems provide powerful, large-scale energy generation tailored to meet the demands of factories and production facilities. Our systems are optimized for performance, durability, and ROI.",
    featuresTitle: "Key Features",
    features: [
      "High-Capacity Panels: Designed for heavy energy loads.",
      "Durable Mounting Systems: Withstand harsh industrial environments.",
      "Smart Grid Integration: Optimize energy flow with intelligent systems.",
      "Custom Engineering: Tailored for different industrial sectors.",
      "Remote Monitoring: Control and track systems in real-time.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Significant Cost Savings: Reduce massive electricity bills.",
      "Boosted Operational Efficiency: Reliable, uninterrupted energy.",
      "Improved Sustainability Metrics: Meet industry regulations and ESG goals.",
      "Energy Stability: Lower risk from energy price volatility.",
      "Scalable Infrastructure: Expand as your industrial needs grow.",
    ],
  },
  {
    id: "on-grid",
    title: "On-Grid Solar Systems",
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
   
    shortDescription: "Connected to the power grid for optimal efficiency and savings.",
    fullTitle: "Why Choose On-Grid Solar Systems?",
    description:
      "On-grid systems are ideal for locations with reliable power supply. These systems work with your utility company to save money through net metering while reducing your environmental impact.",
    featuresTitle: "Key Features",
    features: [
      "Grid Connection: Seamlessly integrates with existing power supply.",
      "Net Metering Support: Send excess energy back to the grid.",
      "No Battery Required: Cost-effective system design.",
      "Smart Energy Management: Monitor and optimize usage.",
      "High Efficiency: Lower operational cost with superior panels.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Reduced Energy Bills: Pay only for the power you consume.",
      "Government Incentives: Benefit from rebates and subsidies.",
      "Low Maintenance: Fewer components to maintain.",
      "Eco-Friendly: Reduce fossil fuel dependence.",
      "Quick Installation: Get started with clean energy fast.",
    ],
  },
  {
    id: "off-grid",
    title: "Off-Grid Solar Systems",
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
   
    shortDescription: "Go fully independent with off-grid solar power systems.",
    fullTitle: "Why Choose Off-Grid Solar Systems?",
    description:
      "Off-grid solar systems are perfect for remote areas without access to electricity. They come with battery storage and inverters to ensure uninterrupted power even during nights or cloudy days.",
    featuresTitle: "Key Features",
    features: [
      "Complete Independence: No reliance on utility power.",
      "Battery Backup: Power your space 24/7.",
      "Custom Design: Built to match your energy needs.",
      "Rugged Components: Made for durability in all weather conditions.",
      "Inverter Technology: Efficient conversion and load handling.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Energy Freedom: Absolute control over your power source.",
      "Ideal for Remote Areas: Perfect where grid access is unavailable.",
      "Lower Lifetime Cost: Long-term savings over diesel/generators.",
      "Scalable Solutions: Upgrade easily as needs grow.",
      "Reliable Power Supply: Stay powered day and night.",
    ],
  },
  {
    id: "hybrid",
    title: "Hybrid Solar Systems",
    image:'https://static.vecteezy.com/system/resources/thumbnails/040/995/143/small/ai-generated-fields-of-solar-panels-and-systems-to-produce-green-electricity-ai-generated-photo.jpg',
    heroimg:'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',
   
    shortDescription: "Blend of on-grid and off-grid for ultimate flexibility.",
    fullTitle: "Why Choose Hybrid Solar Panels?",
    description:
      "Hybrid solar panels combine the best of both on-grid and off-grid systems, allowing you to enjoy the benefits of solar energy while still being connected to the grid. With battery storage and grid integration, hybrid systems offer flexibility and reliability.",
    featuresTitle: "Key Features",
    features: [
      "Dual Functionality: Enjoy the benefits of both grid-connected and off-grid solutions.",
      "Battery Storage: Store excess solar energy for use during cloudy days or at night.",
      "Grid Connection Flexibility: Stay connected to the grid for added reliability.",
      "Smart Inverter Technology: Efficiently manage energy flow.",
      "Optimal Energy Use: Maximize savings by using stored energy during peak times.",
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Increased Energy Savings: Reduce bills during peak hours.",
      "Backup Power Supply: Keep power on during outages.",
      "Environmental Impact: Lower carbon emissions.",
      "Reliable Power Supply: Grid + battery = consistent energy.",
      "Scalable System: Easily expand as energy needs grow.",
    ],
  },
];

const SolarPanels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (<>
    <div className="max-w-7xl mx-auto ">
      {!selectedPanel ? (
        <div className="p-6">
          <div>
          <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
        Our Solar Panel
        </p>
      </div>
      <div className="w-full flex flex-col mt-6 lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
        Solutions
        </h2>
      
      </div>
          </div>
          {/* <h1 className="text-4xl font-bold text-center mb-12">
            Our Solar Panel Solutions
          </h1> */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {solarPanelData.map((panel) => (
              <div
                key={panel.id}
                onClick={() => setSelectedPanel(panel)}
                className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                <div><img src={panel.image} alt="" /></div>
                <h3 className="text-xl font-semibold mb-2">{panel.title}</h3>
                <p className="text-gray-600">{panel.shortDescription}</p>
                <button className="mt-4 text-yellow-600 font-medium hover:underline">
                Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
            
        
          <div className="relative h-60 overflow-hidden flex mx-w-auto items-center justify-start bg-cover bg-center" style={{ backgroundImage: `url(${selectedPanel.heroimg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-row  gap-4 z-10 text-center text-white max-w-3xl px-4">
        <button
            onClick={() => setSelectedPanel(null)}
            className="text-blue-600 mb-6 hover:underline"
          >
            ← 
          </button>  <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedPanel.title}</h1>
              </div>
      </div>

         <div className="flex flex-col  items-start  p-6">
    <h2 className="text-3xl font-bold mb-4 r">
            {selectedPanel.fullTitle}
          </h2>
          <p className="text-lg text-gray-600  max-w-3xl ">
            {selectedPanel.description}
          </p>
      
         </div>

          <div className="grid  gap-10 p-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                {selectedPanel.featuresTitle}
              </h3>
              <ul className="space-y-4 text-gray-700">
                {selectedPanel.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">✔</span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                {selectedPanel.benefitsTitle}
              </h3>
              <ul className="space-y-4 text-gray-700">
                {selectedPanel.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-xl">★</span>
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
      At Shivyantra Solar Solutions, we’re more than just a solar company — we’re your trusted partner for sustainable energy. Here's what sets us apart:
    </p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Tailored Solutions</h3>
        <p className="text-gray-600">
          We assess your unique energy needs and offer customized solar systems that perfectly match your requirements and environment.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Premium Quality</h3>
        <p className="text-gray-600">
          We use only the best-in-class panels and components from trusted brands to ensure long-term reliability and efficiency.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Certified Experts</h3>
        <p className="text-gray-600">
          Our team of certified technicians and engineers ensure flawless design, seamless installation, and ongoing support.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Affordable Pricing</h3>
        <p className="text-gray-600">
          With transparent pricing and zero hidden charges, we help you switch to solar without breaking the bank.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">End-to-End Support</h3>
        <p className="text-gray-600">
          From consultation to post-installation monitoring — we’re with you every step of the way to ensure a smooth solar journey.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2 text-yellow-600">Eco Commitment</h3>
        <p className="text-gray-600">
          We're committed to a cleaner planet and helping you reduce your carbon footprint with eco-friendly energy.
        </p>
      </div>
    </div>
  </div>
</div>
<TestimonialsSection/>
    </>
  );
};

export default SolarPanels;