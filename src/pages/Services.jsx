import React, { useState, useEffect, useRef } from "react";

import { styles } from "../styles/styles";
import OurTeam from "../components/Services/OurTeam";
import WhyChooseUs from "../components/Services/WhyChooseUs";
import Paragraph from "../components/Services/Paragraph";
import { Helmet } from "react-helmet-async";
import m1 from '/assets/m1.jpg'
import COMMERCIAL from '/assets/COMMERCIAL .jpg'
import HOME from '/assets/HOME.jpg'
import industrial from '/assets/industrial.jpg'
import INS from '/assets/INS.jpg'
import HowIW from "../components/Home/HowIW";
import CallToAction from "../components/Services/CTA";
const solarPanelData = [
  {
    id: "residential",
    image: HOME,
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
    id: "institute",
    title: "Institute Solar Panels",
    image: INS, // Replace with the actual import or path to the image
    shortDescription: "Smart solar solutions designed for schools, colleges, and universities.",
    fullTitle: "Why Choose Institute Solar Panels?",
    description:
      "Institute solar panels offer reliable, cost-effective energy solutions tailored for educational campuses. From classrooms to laboratories, our systems ensure sustainable power while promoting green learning environments.",
    
    featuresTitle: "Key Features",
    features: [
      "Tailored Campus Design: Optimized for rooftops, playgrounds, and open grounds.",
      "Energy Monitoring Dashboard: Live tracking for learning and maintenance.",
      "Hybrid Systems: Battery backup for uninterrupted power.",
      "Student Engagement: Real-world sustainability education tool.",
      "Silent Operation: No disruption to classes or campus activities.",
    ],
    
    benefitsTitle: "Benefits",
    benefits: [
      "Reduced Power Costs: Save significantly on annual electricity bills.",
      "Educational Value: Promote awareness and inspire future generations.",
      "Green Branding: Enhance reputation with sustainability initiatives.",
      "Government Incentives: Eligible for educational subsidies and net metering.",
      "Reliable Infrastructure: Designed for long-term, low-maintenance use.",
    ],
  }
  ,
  {
    id: "commercial",
    image: COMMERCIAL,
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
    image: industrial,
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
  // {
  //   id: "on-grid",
  //   title: "On-Grid Solar Systems",
  //   image: 'https://img.freepik.com/free-photo/solar-photovoltaic-panels-station-checks_1150-18190.jpg?t=st=1744798489~exp=1744802089~hmac=c310a3741aa2ea573925973b920a92d316b75ef0d94540441e82a551f4395f14&w=740',
  //   heroimg: 'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',

  //   shortDescription: "Connected to the power grid for optimal efficiency and savings.",
  //   fullTitle: "Why Choose On-Grid Solar Systems?",
  //   description:
  //     "On-grid systems are ideal for locations with reliable power supply. These systems work with your utility company to save money through net metering while reducing your environmental impact.",
  //   featuresTitle: "Key Features",
  //   features: [
  //     "Grid Connection: Seamlessly integrates with existing power supply.",
  //     "Net Metering Support: Send excess energy back to the grid.",
  //     "No Battery Required: Cost-effective system design.",
  //     "Smart Energy Management: Monitor and optimize usage.",
  //     "High Efficiency: Lower operational cost with superior panels.",
  //   ],
  //   benefitsTitle: "Benefits",
  //   benefits: [
  //     "Reduced Energy Bills: Pay only for the power you consume.",
  //     "Government Incentives: Benefit from rebates and subsidies.",
  //     "Low Maintenance: Fewer components to maintain.",
  //     "Eco-Friendly: Reduce fossil fuel dependence.",
  //     "Quick Installation: Get started with clean energy fast.",
  //   ],
  // },
  // {
  //   id: "off-grid",
  //   title: "Off-Grid Solar Systems",
  //   image: 'https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15600.jpg?t=st=1744798359~exp=1744801959~hmac=f2b13cf0cc1e10228d26d9366fbdd8ae6250aad53169e070cde4d958e454ad08&w=740',
  //   heroimg: 'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',

  //   shortDescription: "Go fully independent with off-grid solar power systems.",
  //   fullTitle: "Why Choose Off-Grid Solar Systems?",
  //   description:
  //     "Off-grid solar systems are perfect for remote areas without access to electricity. They come with battery storage and inverters to ensure uninterrupted power even during nights or cloudy days.",
  //   featuresTitle: "Key Features",
  //   features: [
  //     "Complete Independence: No reliance on utility power.",
  //     "Battery Backup: Power your space 24/7.",
  //     "Custom Design: Built to match your energy needs.",
  //     "Rugged Components: Made for durability in all weather conditions.",
  //     "Inverter Technology: Efficient conversion and load handling.",
  //   ],
  //   benefitsTitle: "Benefits",
  //   benefits: [
  //     "Energy Freedom: Absolute control over your power source.",
  //     "Ideal for Remote Areas: Perfect where grid access is unavailable.",
  //     "Lower Lifetime Cost: Long-term savings over diesel/generators.",
  //     "Scalable Solutions: Upgrade easily as needs grow.",
  //     "Reliable Power Supply: Stay powered day and night.",
  //   ],
  // },
  // {
  //   id: "hybrid",
  //   title: "Hybrid Solar Systems",
  //   image: 'https://img.freepik.com/free-photo/solar-pannels-wind-power-plant-outside_23-2149352234.jpg?t=st=1744798354~exp=1744801954~hmac=deeb6070488b5724f22f231c7dda24c423e127c3fb8c07586a3389261ebe4289&w=740',
  //   heroimg: 'https://c1.wallpaperflare.com/preview/727/607/827/photovoltaic-solar-system-energy-clouds.jpg',

  //   shortDescription: "Blend of on-grid and off-grid for ultimate flexibility.",
  //   fullTitle: "Why Choose Hybrid Solar Panels?",
  //   description:
  //     "Hybrid solar panels combine the best of both on-grid and off-grid systems, allowing you to enjoy the benefits of solar energy while still being connected to the grid. With battery storage and grid integration, hybrid systems offer flexibility and reliability.",
  //   featuresTitle: "Key Features",
  //   features: [
  //     "Dual Functionality: Enjoy the benefits of both grid-connected and off-grid solutions.",
  //     "Battery Storage: Store excess solar energy for use during cloudy days or at night.",
  //     "Grid Connection Flexibility: Stay connected to the grid for added reliability.",
  //     "Smart Inverter Technology: Efficiently manage energy flow.",
  //     "Optimal Energy Use: Maximize savings by using stored energy during peak times.",
  //   ],
  //   benefitsTitle: "Benefits",
  //   benefits: [
  //     "Increased Energy Savings: Reduce bills during peak hours.",
  //     "Backup Power Supply: Keep power on during outages.",
  //     "Environmental Impact: Lower carbon emissions.",
  //     "Reliable Power Supply: Grid + battery = consistent energy.",
  //     "Scalable System: Easily expand as energy needs grow.",
  //   ],
  // },
];

const Services = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  useEffect(() => {
    document.title = "Services - MyBay  ";
  }, []);

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: 'Check out this product!',
  //         text: 'You’ll love this from Shivyantra!',
  //         url: window.location.href,
  //       });
  //       console.log('Shared successfully!');
  //     } catch (err) {
  //       console.error('Error sharing:', err);
  //     }
  //   } else {
  //     alert('Sharing not supported in this browser.');
  //   }
  // };

  const codeRef = useRef(null); // Ref to the code block

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent)
        .then(() => {
          alert('Code copied to clipboard!');
        })
        .catch((err) => {
          console.error('Error copying code: ', err);
        });
    }
  };



  return (<>

<Helmet>
  <title>
    {selectedPanel
      ? `${selectedPanel.title} - MyBay `
      : "MyBay Services- Residential, Commercial, Institution, Industrial | MyBay"}
  </title>
  <meta
    name="description"
    content={
      selectedPanel
        ? selectedPanel.description
        : "Discover MyBay’s solar panel solutions for homes, institutions, businesses, and industries. High-efficiency, cost-saving, and eco-friendly energy systems tailored to your needs."
    }
  />
  <meta name="keywords" content="solar panels, MyBay, residential solar, commercial solar, industrial solar, institute solar, green energy, solar installation" />
  <meta property="og:title" content={selectedPanel ? selectedPanel.title : "MyBay Solar Panel Solutions"} />
  <meta property="og:description" content={selectedPanel ? selectedPanel.description : "Explore sustainable solar power systems from MyBay for homes, schools, institutions and factories."} />
  <meta property="og:image" content={selectedPanel ? selectedPanel.image : "/assets/m1.jpg"} />
  <meta property="og:url" content={window.location.href} />
 </Helmet>

    <div className={`${styles.paddingHorizontal} py-6 lg:py-10 bodyBg `}>
      <div className="flex flex-col gap-y-6 justify-start items-center text-center">
        <h1 className="font-bold text-4xl">Our Services</h1>
        <p className="text-black text-base leading-7 lg:w-4/5 font-medium ">
          Empowering homes and businesses through intelligent, clean energy solutions. We bring
          innovation and reliability to every rooftop and open space we serve. Our solar systems are
          tailored for performance, sustainability, and future growth, making renewable energy more
          accessible, efficient, and beautifully integrated into everyday life.
        </p>
      </div>
    </div>





    <div className={`w-full ${styles.paddingHorizontal} py-6 flex flex-col gap-y-10 bodyBg`}>
      {!selectedPanel ? (
        <div className="">
          <div className="flex items-center justify-center gap-x-3 py-5">
            <div className="border w-24 border-purple" />
            <p className="text-purple font-bold text-4xl uppercase">
              SOlutions
            </p>
            <div className="border w-24 border-purple" />
          </div>
          {/* <h1 className="text-4xl font-bold text-center mb-12">
            Our Solar Panel Solutions
          </h1> */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
            {solarPanelData.map((panel) => (
              <div
                key={panel.id}
                onClick={() => setSelectedPanel(panel)}
                className="cursor-pointer bg-white shadow-md w-86 h-full rounded-xl p-6 hover:shadow-xl transition duration-300"
              >
                <div><img src={panel.image} alt={panel.title} /></div>
                <h3 className="text-xl  font-semibold  pt-2 mb-2">{panel.title}</h3>
                <p
                  className="text-black text-md pt-1">{panel.shortDescription}</p>
                {/* <button>
                  <a href={panel.image} target="_blank" download={panel.title}>Download</a>
                </button>
                <button onClick={handleShare}>Share</button> */}

                <button className="mt-4 text-purple text-md font-semibold hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>


          <div className="flex flex-col  items-start  py-6">
            <div className="w-full flex flex-col my-6 lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
              <h2 className="text-3xl font-normal">
                <button
                  onClick={() => setSelectedPanel(null)}
                  className="flex items-center gap-2 text-purple font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  {selectedPanel.title}
                </button>

              </h2>

            </div>
            <p className="text-lg text-black leading-9 max-w-3xl ">
              {selectedPanel.description}
            </p>


          </div>


          <div className="flex flex-col md:flex-row justify-around my-2">
            <div className="flex flex-col gap-10 p-6">
              <div>
                <div className="flex items-center justify-start gap-x-3 mb-5">
                  <div className="border w-10 border-purple" />
                  <p className="text-purple font-semibold text-xl uppercase">
                    {selectedPanel.featuresTitle}
                  </p>
                </div>
                <ul className="space-y-4 text-black">
                  {selectedPanel.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple font-bold text-xl">✔</span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-start gap-x-3 mb-5">
                  <div className="border w-10 border-purple" />
                  <p className="text-purple font-semibold text-xl uppercase ">
                    {selectedPanel.benefitsTitle}
                  </p>
                </div>
                <ul className="space-y-4 text-black">
                  {selectedPanel.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple font-bold text-xl">★</span>
                      <p>{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            <div>
              <img src={selectedPanel.image}
                className="p-6" alt={selectedPanel.title} />
            </div>
          </div>

        </div>
      )}
    </div>
    
    <HowIW />

    <Paragraph />

    {/* <WhyChooseUs /> */}
    
  </>
  );
};

export default Services;