import React from "react";

const Bathroom = () => {
  return (<>
    <section className={`w-full bathroom h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">On-Grid Solar System</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        Connect your solar panel system directly to the local utility grid and enjoy efficient power usage with net metering benefits.
    
        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            No need for battery storage
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Earn credits for excess power
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Cost-effective and easy setup
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Grid power backup availability
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Ideal for homes & businesses
            </span>
          </li>
        </ul>
        <div>
          <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
            shop system
          </button>
        </div>
      </div>
    </section>
    <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose On-Grid Solar Panels?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          On-grid solar systems are designed to seamlessly connect with your local utility grid. They offer a cost-effective, efficient, and eco-friendly solution for homes and businesses that want to reduce their electricity bills and carbon footprint.
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
                <p><strong>Grid Connectivity:</strong> Connects to your local power grid for seamless integration.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Net Metering:</strong> Sell excess energy back to the grid and earn credits or money.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Low-Cost Installation:</strong> Affordable setup due to no need for battery storage.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Easy Maintenance:</strong> Low-maintenance systems that require minimal attention after installation.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Customizable to Your Needs:</strong> Scalable to fit your energy consumption and property size.</p>
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
                <p><strong>Significant Savings:</strong> Reduce your electricity bills by generating your own power.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Environmental Benefits:</strong> Decrease your reliance on fossil fuels and reduce your carbon footprint.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Steady Return on Investment:</strong> Long-term savings and potential income from net metering credits.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Reliable and Consistent Power:</strong> You can always rely on grid power when your solar system isn’t producing energy.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Quick Payback Period:</strong> Save money on electricity bills from day one and recover installation costs in a few years.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bathroom;
