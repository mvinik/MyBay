import React from "react";

const Kitchen = () => {
  return (<>
    <section className={`w-full kitchen h-[70vh] relative`}>
      <div className="bg-white w-full lg:w-2/5 h-auto absolute bottom-0 lg:right-36 p-4 overflow-hidden md:p-7 lg:p-12 flex flex-col gap-y-6">
        <div className="bg-yellow-500 w-20 h-10 absolute top-[-15px] left-[-30px] rotate-[-40deg]" />
        <h1 className="font-bold text-4xl">Commercial Solar Panels</h1>
        <p className="text-gray-500 font-medium text-base leading-7">
        Efficient and scalable solar solutions for your office, retail, or hospitality space — reduce operational costs and boost sustainability.

        </p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Lower energy expenses
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Custom system design
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Tax benefits and subsidies
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Eco-friendly branding
            </span>
          </li>
          <li className="flex items-center gap-x-3">
            <div className="w-4 rounded-lg border-2 border-yellow-500" />
            <span className="text-gray-500 font-medium text-base">
            Professional maintenance
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
          Why Choose Commercial Solar Panels?
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our commercial solar solutions are engineered for maximum output and
          reliability. Ideal for offices, shops, schools, and large business
          facilities — we help you reduce operational costs and enhance your
          brand’s sustainability.
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
                <p>
                  <strong>Scalable Design:</strong> Systems tailored for small
                  businesses to large enterprises.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p>
                  <strong>Net Metering Integration:</strong> Sell excess energy
                  back to the grid and lower your costs.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p>
                  <strong>Real-Time Monitoring:</strong> Track system
                  performance and ROI effortlessly.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p>
                  <strong>Minimal Disruption:</strong> Installed with little to
                  no impact on business operations.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl">✔</span>
                <p>
                  <strong>Long-Term Durability:</strong> Built to withstand
                  industrial usage and weather conditions.
                </p>
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
                <p>
                  <strong>Lower Operational Costs:</strong> Reduce long-term
                  electricity bills significantly.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p>
                  <strong>Corporate Sustainability:</strong> Demonstrate your
                  commitment to a greener planet.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p>
                  <strong>Government Incentives:</strong> Access subsidies, tax
                  breaks, and accelerated depreciation.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p>
                  <strong>Enhanced Brand Image:</strong> Go green and gain trust
                  with your customers and clients.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">★</span>
                <p>
                  <strong>Quick ROI:</strong> Recoup your investment faster with
                  consistent savings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Kitchen;
