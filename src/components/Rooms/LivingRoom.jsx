import React from "react";

const LivingRoom = () => {
  return (<>
    <section className={`w-full living-room h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Residential Solar Panels</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        Power your home with clean, renewable energy using reliable solar panel systems designed for long-term savings and sustainability.

        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Custom rooftop installations
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            High-efficiency solar modules
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Net metering support
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Battery backup options
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Easy EMI & subsidy available
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
    <div>
    <section className="bg-white text-gray-800">
     

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Residential Solar Panels?</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our residential solar systems are designed to deliver maximum efficiency while complementing your home’s aesthetics.
          Whether you're looking to cut costs, reduce your carbon footprint, or gain energy independence — we've got you covered.
        </p>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Key Features</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Custom Design & Installation:</strong> Tailored to fit your roof and home layout.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>High Efficiency Panels:</strong> Harness more energy with advanced solar cell tech.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Battery Storage Integration:</strong> Use solar power day and night, even during outages.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Real-Time Monitoring:</strong> Track energy production and consumption easily.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Smart Inverter Technology:</strong> Converts power efficiently and safely.</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-yellow-600">Benefits</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Up to 70% Savings:</strong> Slash your energy bills dramatically.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Environmentally Friendly:</strong> Reduce your carbon footprint and go green.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Energy Independence:</strong> Take control of your energy future.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Government Incentives:</strong> Enjoy rebates and tax credits to save more.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Increased Home Value:</strong> Boost property value with a green upgrade.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
     
    </section>
       </div>
    </>
  );
};

export default LivingRoom;
