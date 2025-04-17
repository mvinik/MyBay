import React from 'react'
import { styles } from '../../styles/styles'

const Paragraph = () => {
  return (
    <div>
        
        
<div className={`w-full ${styles.paddingHorizontal} py-6 flex flex-col `}>
  
  <div className={` pb-3 pt-6 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
                <div className="w-full md:w-2/3 p-2" >
                  <div className="flex items-center justify-start gap-x-3 mb-5">
                    <div className="border w-10 border-yellow-500" />
                    <p className="text-yellow-500 font-normal text-xl uppercase">
                      Custom Design and Installation
                    </p>
                  </div>
                  <p className="leading-7">We offer tailored solar solutions for every roof type—whether flat, sloped, or architecturally complex—ensuring maximum efficiency and seamless integration. Our process begins with a comprehensive site inspection and solar exposure analysis to determine the ideal panel placement for optimal energy capture. We conduct a personalized assessment of your energy usage to design a system that aligns perfectly with your needs. Our licensed professionals handle all permits, compliance, and installation with precision, ensuring safety and regulatory adherence. Every system is aesthetically arranged to complement your home’s design and preserve curb appeal. Plus, our scalable solutions allow your solar setup to grow as your energy requirements evolve.
  
  </p>
                </div>
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
                <img
                className="w-full" src='data:image/jpeg;base64,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' alt="" /></div>
              </div>
  
              <div className={` py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
                <div  className="w-full md:w-2/3 p-2"  >
                  <div className="flex items-center justify-start gap-x-3 mb-5">
                    <div className="border w-10 border-yellow-500" />
                    <p className="text-yellow-500 font-normal text-xl uppercase">
                    Roof-Mounted and Ground-Mounted Systems
                    </p>
                  </div>
                  <p  className="leading-7">Whether you're looking to make use of your roof space or have ample land, we offer both roof-mounted and ground-mounted solar systems tailored to your property. Roof-mounted panels make efficient use of unused space, while ground-mounted setups are ideal for farms or open fields. We use engineered racking systems that offer stability, weather resistance, and adjustable tilt angles to maximize sun exposure year-round. Ground systems provide easier maintenance access and can be positioned to avoid shading. Our team provides customized recommendations based on roof type, soil condition, and geographic angle to ensure top performance.
                 </p>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-row sm:flex-col items-center justify-center">
                {/* <img className="w-full" src='https://img.freepik.com/free-photo/3d-solar-pannels-project-energy-saving_23-2148907417.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="" /> */}
                <img className="w-full" src='https://img.freepik.com/premium-photo/solar-energy-generated-farm_28943-282.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="" /></div>
          
              </div>
  
  
              <div className={` py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
                <div  className="w-full md:w-2/3 p-2" >
                  <div className="flex items-center justify-start gap-x-3 mb-5">
                    <div className="border w-10 border-yellow-500" />
                    <p className="text-yellow-500 font-normal text-xl uppercase">
                    Battery Storage Integration
                    </p>
                  </div>
                  <p  className="leading-7">With our battery storage solutions, you can store excess solar energy generated during the day for use at night or during overcast weather. These systems also provide reliable backup power in the event of grid outages or blackouts. We use smart battery technology that efficiently manages loads and ensures long-term performance. Our battery systems integrate seamlessly with both hybrid and off-grid solar setups and are scalable to meet growing energy demands. Featuring durable, low-maintenance lithium-ion batteries, our solutions also include intuitive apps that give you full control and insights into your energy usage.
  
  </p>
                </div>
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
                <img src='https://img.freepik.com/premium-photo/solar-panel-blue-sky-background-alternative-energy-concept-clean-energy-green-energy_29332-749.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="" /></div>
              </div>
  
              
              <div className={`py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
                <div  className="w-full md:w-2/3 p-2" >
                  <div className="flex items-center justify-start gap-x-3 mb-5">
                    <div className="border w-10 border-yellow-500" />
                    <p className="text-yellow-500 font-normal text-xl uppercase">
                    Monitoring Systems
                    </p>
                  </div>
                  <p  className="leading-7">Stay informed and in control with advanced monitoring systems that provide real-time data tracking via desktop or mobile dashboards. Get instant alerts for any performance issues or maintenance needs and gain deep insights into your energy usage to make informed adjustments. Our systems let you compare energy production across daily, weekly, and monthly intervals. With cloud-based platforms offering secure remote access, you can manage your solar system from anywhere. Historical data reports help with warranty claims and performance analysis, and integrations with smart assistants like Alexa or Google Home bring convenience to your fingertips.
  
  
  </p>
                </div>
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
                <img src='https://img.freepik.com/free-photo/photovoltaics-solar-power-station-energy-from-natural_169016-5819.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="" /></div>
              </div>
     
              <div className={`py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
                <div  className="w-full md:w-2/3 p-2" >
                  <div className="flex items-center justify-start gap-x-3 mb-5">
                    <div className="border w-10 border-yellow-500" />
                    <p className="text-yellow-500 font-normal text-xl uppercase">
                    Maintenance and Support
                    </p>
                  </div>
                  <p className="leading-7">We ensure the longevity and efficiency of your solar system with comprehensive maintenance and support services. Choose from regular inspection and cleaning packages that keep your panels performing at their best. Our dedicated support team is available 24/7 for technical assistance and rapid troubleshooting. We offer warranty servicing, fast component replacement, and annual performance audits. With remote diagnostics, many issues can be resolved without the need for a site visit. Our technicians are highly experienced across all system types, and our affordable service contracts provide long-term peace of mind.
  
  
  </p>
                </div>
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
                <img src='https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15597.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="" /></div>
              </div>
  
  </div>
    </div>
  )
}

export default Paragraph