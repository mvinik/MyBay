import React from "react";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col  justify-start gap-4">
    <div className="w-40">
    <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"
        alt=""
        className="w-24 shadow-2xl rounded-md"
      />
    </div>
      <div className="flex flex-col justify-around items-start">
        <p className="text-base text-gray-600 font-medium leading-7">
          "Porttitor diam porta eu, id et vestibulum quam vestibulum facilisis
          nulla ornare eu pretium dictum quam pharetra, nisl maecenas pretium
          sed eget interdum auctor et, aliquam sem lectus."
        </p>
        <p className="font-bold text-base mt-2">Simon Dignite</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
