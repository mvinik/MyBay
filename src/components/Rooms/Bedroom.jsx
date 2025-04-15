import React from "react";

const Bedroom = () => {
  return (<>
    <section className={`w-full bedroom h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Industrial Solar Panels</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        High-efficiency, large-scale solar systems tailored for factories and warehouses to meet heavy energy demands.

        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            High-output panel systems
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Grid and off-grid options
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Heavy-duty infrastructure
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Government-approved systems
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Energy audits included
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
    <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Industrial Solar Panels?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Industrial solar panels are designed for high-load facilities that consume large amounts of power daily.
          Ideal for factories, warehouses, and heavy-duty manufacturing units — these systems provide consistent, reliable, and cost-effective energy.
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
                <p><strong>High Capacity Systems:</strong> Built to meet large-scale energy demands efficiently.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Durable Infrastructure:</strong> Withstands extreme environmental conditions and heavy use.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Energy Load Optimization:</strong> Reduce peak-hour charges and manage load smartly.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Custom Mounting Options:</strong> Compatible with rooftops, ground, or carports.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Advanced Safety Systems:</strong> Includes surge protection and fire-safe designs.</p>
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
                <p><strong>Massive Cost Reduction:</strong> Slash operational power bills by up to 80%.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Boost Energy Efficiency:</strong> Maintain productivity while reducing power loss.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Eco-Friendly Manufacturing:</strong> Reduce carbon emissions and support green industry goals.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Eligibility for Subsidies:</strong> Government schemes and tax benefits apply.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Reliable Power Source:</strong> Stable energy for non-stop production processes.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bedroom;
