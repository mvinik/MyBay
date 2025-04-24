import React from 'react'
import { styles } from '../../styles/styles'

const Paragraph = () => {
  return (
    <div>


      <div className={`w-full ${styles.paddingHorizontal} py-6 flex flex-col bodyBg text-black`}>

        <div className={` pb-3 pt-6 lg:py-6 bodyBg flex flex-col md:flex-row items-center  `}>
          <div className="w-full md:w-2/3 p-2" >
            <div className="flex items-center justify-start gap-x-3 mb-5">
              <div className="border w-10 border-purple" />
              <p className="text-purple font-semibold text-xl uppercase">
                Custom Design and Installation
              </p>
            </div>
            <p className=" leading-7 ">We offer tailored solar solutions for every roof type—whether flat, sloped, or architecturally complex—ensuring maximum efficiency and seamless integration. Our process begins with a comprehensive site inspection and solar exposure analysis to determine the ideal panel placement for optimal energy capture. We conduct a personalized assessment of your energy usage to design a system that aligns perfectly with your needs. Our licensed professionals handle all permits, compliance, and installation with precision, ensuring safety and regulatory adherence. Every system is aesthetically arranged to complement your home’s design and preserve curb appeal. Plus, our scalable solutions allow your solar setup to grow as your energy requirements evolve.

            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
            <img
              className="w-full" src='https://media.istockphoto.com/id/1405880267/photo/two-engineers-installing-solar-panels-on-roof.jpg?s=612x612&w=0&k=20&c=OvQDbJaTnMM4jPfIA3y5vrO88i98NZJRahZtnYFZCq0=' alt="Solar Panel" /></div>
        </div>

        <div className={` py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
          <div className="w-full md:w-2/3 p-2"  >
            <div className="flex items-center justify-start gap-x-3 mb-5">
              <div className="border w-10 border-purple" />
              <p className="text-purple font-semibold text-xl uppercase">
                Roof-Mounted and Ground-Mounted Systems
              </p>
            </div>
            <p className=" leading-7 ">Whether you're looking to make use of your roof space or have ample land, we offer both roof-mounted and ground-mounted solar systems tailored to your property. Roof-mounted panels make efficient use of unused space, while ground-mounted setups are ideal for farms or open fields. We use engineered racking systems that offer stability, weather resistance, and adjustable tilt angles to maximize sun exposure year-round. Ground systems provide easier maintenance access and can be positioned to avoid shading. Our team provides customized recommendations based on roof type, soil condition, and geographic angle to ensure top performance.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-row sm:flex-col items-center justify-center">
            {/* <img className="w-full" src='https://img.freepik.com/free-photo/3d-solar-pannels-project-energy-saving_23-2148907417.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="Solar Panel" /> */}
            <img className="w-full" src='https://img.freepik.com/premium-photo/solar-energy-generated-farm_28943-282.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'  alt="Solar Panel"  /></div>

        </div>


        <div className={` py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
          <div className="w-full md:w-2/3 p-2" >
            <div className="flex items-center justify-start gap-x-3 mb-5">
              <div className="border w-10 border-purple" />
              <p className="text-purple font-semibold text-xl uppercase">
                Battery Storage Integration
              </p>
            </div>
            <p className=" leading-7 ">With our battery storage solutions, you can store excess solar energy generated during the day for use at night or during overcast weather. These systems also provide reliable backup power in the event of grid outages or blackouts. We use smart battery technology that efficiently manages loads and ensures long-term performance. Our battery systems integrate seamlessly with both hybrid and off-grid solar setups and are scalable to meet growing energy demands. Featuring durable, low-maintenance lithium-ion batteries, our solutions also include intuitive apps that give you full control and insights into your energy usage.

            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
            <img src='https://img.freepik.com/premium-photo/solar-panel-blue-sky-background-alternative-energy-concept-clean-energy-green-energy_29332-749.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'  alt="Solar Panel" /></div>
        </div>


        <div className={`py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
          <div className="w-full md:w-2/3 p-2" >
            <div className="flex items-center justify-start gap-x-3 mb-5">
              <div className="border w-10 border-purple" />
              <p className="text-purple font-semibold text-xl uppercase">
                Monitoring Systems
              </p>
            </div>
            <p className=" leading-7 ">Stay informed and in control with advanced monitoring systems that provide real-time data tracking via desktop or mobile dashboards. Get instant alerts for any performance issues or maintenance needs and gain deep insights into your energy usage to make informed adjustments. Our systems let you compare energy production across daily, weekly, and monthly intervals. With cloud-based platforms offering secure remote access, you can manage your solar system from anywhere. Historical data reports help with warranty claims and performance analysis, and integrations with smart assistants like Alexa or Google Home bring convenience to your fingertips.


            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
            <img src='https://img.freepik.com/free-photo/photovoltaics-solar-power-station-energy-from-natural_169016-5819.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="Solar Panel"  /></div>
        </div>

        <div className={`py-3 lg:py-6 bodyBg flex flex-col md:flex-row items-center `}>
          <div className="w-full md:w-2/3 p-2" >
            <div className="flex items-center justify-start gap-x-3 mb-5">
              <div className="border w-10 border-purple" />
              <p className="text-purple font-semibold text-xl uppercase">
                Maintenance and Support
              </p>
            </div>
            <p className=" leading-7 ">We ensure the longevity and efficiency of your solar system with comprehensive maintenance and support services. Choose from regular inspection and cleaning packages that keep your panels performing at their best. Our dedicated support team is available 24/7 for technical assistance and rapid troubleshooting. We offer warranty servicing, fast component replacement, and annual performance audits. With remote diagnostics, many issues can be resolved without the need for a site visit. Our technicians are highly experienced across all system types, and our affordable service contracts provide long-term peace of mind.


            </p>
          </div>
          <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
            <img src='https://img.freepik.com/free-photo/man-worker-firld-by-solar-panels_1303-15597.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740' alt="Solar Panel" /></div>
        </div>

      </div>
    </div>
  )
}

export default Paragraph