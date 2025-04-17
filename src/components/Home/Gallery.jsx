import React, { useState } from "react";
import { styles } from "../../styles/styles";

const images = [
  "https://img.freepik.com/premium-photo/solar-energy-generated-farm_28943-282.jpg?w=740",
  "https://img.freepik.com/premium-photo/renewable-energy-solar-panels-wind-turbines-green-grass-blue-sky_28943-541.jpg?w=740",
  "https://img.freepik.com/free-photo/photovoltaics-solar-power-station-energy-from-natural_169016-5821.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/aerial-view-solar-power-plant-construction-green-field-assembling-electric-panels-producing-clean-ecologic-energy_127089-11446.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/medium-shot-engineers-discussing-about-solar-pannels_23-2149352239.jpg?t=st=1744870150~exp=1744873750~hmac=f64cb08276e701e9c0520d458ee2d927d3bc4914aa8a1461bd7421238634051a&w=740",
//   "https://img.freepik.com/free-photo/solar-power-power-station_1387-161.jpg?t=st=1744870426~exp=1744874026~hmac=7ba21e8644efb7790be5eaafc93f407f1763072db99aa0d0b20a79d730dd42aa&w=740",
];

const GallerySlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={`${styles.paddingHorizontal} w-full lg:py-16 flex flex-col`}>
      <div className="flex items-center justify-start gap-x-3 py-6">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">Gallery</p>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">Explore Our Works</h2>
      </div>

      {/* Main Image */}
      <div className="grid gap-4 pt-6">
        <div>
          <img
            src={images[current]}
            alt="main-gallery"
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"/>
        </div>

        {/* Thumbnails */}
        <div className="grid  grid-cols-5 gap-x-4">
          {images.map((img, index) => (
            <img data-thumbnail 
              key={index}
              src={img}
              onClick={() => setCurrent(index)}
              className="object-cover object-center h-25 max-w-full rounded-lg cursor-pointer" 
              alt={`thumbnail-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
