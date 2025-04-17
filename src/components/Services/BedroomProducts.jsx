import React from "react";
import { styles } from "../../styles/styles";
import ProductCard from "../Home/ProductCard";

const BedroomProducts = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 lg:py-16 bodyBg`}
    >
        <div
        className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
      >
        <img
          src={'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt=""
          className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
        />
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-xs text-gray-500 font-medium">Solar panel</p>
          <p className="text-base text-yellow-500 font-medium">residensial</p>
          <p className="text-base text-black font-medium">$12000</p>
        </div>
      </div>

      <div
        className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
      >
        <img
          src={'https://img.freepik.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'}
          alt=""
          className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
        />
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-xs text-gray-500 font-medium">Solar panel</p>
          <p className="text-base text-yellow-500 font-medium">residensial</p>
          <p className="text-base text-black font-medium">$12000</p>
        </div>
      </div>

      <div
        className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
      >
        <img
          src={'https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'}
          alt=""
          className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
        />
        <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-xs text-gray-500 font-medium">Solar panel</p>
          <p className="text-base text-yellow-500 font-medium">residensial</p>
          <p className="text-base text-black font-medium">$12000</p>
        </div>
      </div>

      <div
        className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
      >
        <img
          src={'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D'}
          alt=""
          className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
        />
        {/* <div className="flex flex-col items-center justify-center gap-y-2">
          <p className="text-xs text-gray-500 font-medium">Solar panel</p>
          <p className="text-base text-yellow-500 font-medium">residensial</p>
          <p className="text-base text-black font-medium">$12000</p>
        </div> */}
      </div>
    </div>
  );
};

export default BedroomProducts;
