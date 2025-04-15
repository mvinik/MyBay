import React from "react";

const Hybrid = () => {
  return (<>
    <section className={`w-full hybrid h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Hybrid Solar Systems</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        The best of both worlds – stay connected to the grid while having backup energy storage during outages.
       
        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Grid + battery solution
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Power backup in outages
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Smart inverter systems
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Energy storage control
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Future-proof setup
            </span>
          </li>
        </ul>
        <div>
          <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
            shop panels
          </button>
        </div>
      </div>
    </section>

    {/* About Section */}
    <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Hybrid Solar Panels?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Hybrid solar panels combine the best of both on-grid and off-grid systems, allowing you to enjoy the benefits of solar energy while still being connected to the grid. With battery storage and grid integration, hybrid systems offer flexibility and reliability.
        </p>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">
              Key Features
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Dual Functionality:</strong> Enjoy the benefits of both grid-connected and off-grid solutions.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Battery Storage:</strong> Store excess solar energy for use during cloudy days or at night.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Grid Connection Flexibility:</strong> Stay connected to the grid for added reliability, while still enjoying energy independence.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Smart Inverter Technology:</strong> Efficiently manages the flow of energy between the grid, your panels, and your batteries.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Optimal Energy Use:</strong> Maximize your energy savings by using stored energy when electricity prices are high.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">
              Benefits
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Increased Energy Savings:</strong> Reduce your energy bills by using stored solar energy during peak rates.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Backup Power Supply:</strong> Never lose power with battery storage, even when the grid goes down.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Environmental Impact:</strong> Reduce your carbon footprint by utilizing renewable energy sources.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Reliable Power Supply:</strong> Always have access to power, whether through the grid or battery backup.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Scalable System:</strong> Easily expand your hybrid solar system as your energy needs grow.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hybrid;
