import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import ProductCard from "./ProductCard";
import { homeproducts2 } from "../../constants/homeproducts";
import { useFetchProductsQuery } from "../../features/productsSlice/productsSlice";

const BestSeller = () => {
  

  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-24 flex flex-col gap-y-8`}
    >
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
         MOST POPULAR
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
          Discover Our <br /> Most Popular Panels
        </h2>
        {/* <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all best sellers
        </button> */}
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6`}
      >
       
      
 
                   <div
                     className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
                   >
                     <img
                       src={'https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'}
                       alt=""
                       className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
                     />
                     <div className="flex flex-col items-center justify-center">
                       <p className="text-xs text-gray-500 font-medium">Solar panel</p>
                       
                     </div>
                   </div>

                   <div
                     className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
                   >
                     <img
                       src={'https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'}
                       alt=""
                       className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
                     />
                     <div className="flex flex-col items-center justify-center">
                       <p className="text-xs text-gray-500 font-medium">Solar panel</p>
                       
                     </div>
                   </div>

                   <div
                     className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
                   >
                     <img
                       src={'https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'}
                       alt=""
                       className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
                     />
                     <div className="flex flex-col items-center justify-center">
                       <p className="text-xs text-gray-500 font-medium">Solar panel</p>
                       
                     </div>
                   </div>


                   <div
                     className={`group mx-auto hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between gap-y-4 p-4 text-center`}
                   >
                     <img
                       src={'https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbGFyJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D'}
                       alt=""
                       className="h-[220px] scale-110 group-hover:scale-125 transition-all duration-700"
                     />
                     <div className="flex flex-col items-center justify-center">
                       <p className="text-xs text-gray-500 font-medium">Solar panel</p>
                       
                     </div>
                   </div>

        
      </div>
    </div>
  );
};

export default BestSeller;
