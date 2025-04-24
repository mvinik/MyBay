import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white py-16 px-6 sm:px-12 rounded-2xl shadow-2xl my-10 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Ready to Transform Your Energy Future?
      </h2>
      <p className="text-lg sm:text-xl mb-8 text-white/90">
        Discover the benefits of clean, sustainable solar energy today. Join thousands who’ve made the switch.
      </p>
      <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl text-lg hover:bg-indigo-100 transition duration-300 shadow-md hover:shadow-lg">
        Get Your Free Consultation
      </button>
    </div>
  );
};

export default CallToAction;
