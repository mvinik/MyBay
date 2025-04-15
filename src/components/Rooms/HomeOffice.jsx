import React from "react";

const HomeOffice = () => {
  return (<>
    <section className={`w-full living-room h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Off-Grid Solar System</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        Go completely independent from the power grid with an off-grid solar system equipped with battery storage for uninterrupted power supply.
        </p>
    
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Perfect for remote locations
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Battery backup ensures power 24/7
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            No reliance on the utility grid
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Great for cabins, farms, and rural homes
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Independent energy control
            </span>
          </li>
        </ul>
        <div>
          <button className="bg-yellow-500 py-3 px-8 uppercase text-xs font-medium">
          shop system
          </button>
        </div>
      </div>
    </section>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Off-Grid Solar Panels?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Off-grid solar systems are perfect for those who want complete energy independence. Ideal for remote areas, these systems include battery storage, enabling you to store energy for use when the sun isn’t shining, ensuring a constant power supply.
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
                <p><strong>Energy Independence:</strong> Provides complete autonomy from utility grids.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Battery Storage:</strong> Store excess energy to use during cloudy days or at night.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Reliable Power Supply:</strong> Never worry about power cuts, even in remote areas.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Low Maintenance:</strong> Off-grid systems are self-sustaining and require minimal maintenance.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p><strong>Easy Installation:</strong> Ideal for locations without easy access to the grid infrastructure.</p>
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
                <p><strong>Complete Energy Control:</strong> Be in full control of your power needs, no more dependence on local grids.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>No Power Outages:</strong> Enjoy uninterrupted power supply even during blackouts or power grid issues.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Ideal for Remote Locations:</strong> Perfect for cabins, farms, or off-the-grid locations with no access to electricity.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Environmental Impact:</strong> Minimize your environmental footprint by reducing reliance on fossil fuels.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p><strong>Self-Sustaining:</strong> Enjoy a completely off-the-grid lifestyle, using only solar energy.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOffice;
