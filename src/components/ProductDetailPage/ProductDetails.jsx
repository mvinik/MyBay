import React from "react";

const ResidentialPanel = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Solar Solutions</h1>
          <p className="text-lg md:text-xl">Power your home with clean, renewable energy and reduce your electricity bills sustainably.</p>
        </div>
      </div>

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
      <div className="bg-yellow-500 py-12 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Power Your Home with the Sun?</h2>
        <p className="mb-6 text-lg">Contact us today to get a free quote and personalized consultation.</p>
        <button className="bg-white text-yellow-600 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-100 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ResidentialPanel;
