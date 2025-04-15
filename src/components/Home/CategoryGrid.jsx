import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/services#${productId}`);
  };

  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-24 flex flex-col gap-y-8`}
    >
      <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-yellow-500" />
        <p className="text-yellow-500 font-normal text-sm uppercase">
       Gategories
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
       Our Services
        </h2>
        {/* <button className="bg-yellow-500 hover:text-white transition-all duration-100 py-3 px-8 uppercase text-xs font-medium">
          view all best sellers
        </button> */}
      </div>
      <div className="w-full px-4">
      <Slider {...settings}>
        {/* Residential */}
        <div className="px-2"
        onClick={() => handleClick("residential")}>
          <div className="relative">
            <img
              src={'https://as2.ftcdn.net/jpg/05/19/44/59/1000_F_519445978_PEPYf1rgopUdcN31HobzIVv8RAaoqNRE.jpg'}
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">Residential Solar Panels</p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Commercial */}
        <div className="px-2"
        onClick={() => handleClick("commercial")}>
          <div className="relative">
            <img
              src="https://prozparity.com/wp-content/uploads/2021/01/Factory-roof-solar-PV-570x350.jpg"
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 w-full object-cover transition-all duration-75"
            />
            <Link
              to="/commercial"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">Commercial Solar Panels</p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>


        <div className="px-2"
        onClick={() => handleClick("industrial")}>
          <div className="relative">
            <img
              src={'https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'}
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">Industrial Solar Panels

              </p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>



        <div className="px-2"
         onClick={() => handleClick("on-grid")}>
          <div className="relative">
            <img
              src={'https://gepsenergy.com/assets/images/blog/single/On-Grid-System.webp'}
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">On-Grid Solar System

              </p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Off-Grid (your provided div) */}
        <div className="px-2"
         onClick={() => handleClick("off-grid")}>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg?t=st=1744366085~exp=1744369685~hmac=686c0f561284d3c632f1c8732c28a0f82238392d8e0f9f3a8087357c0127ba3b&w=740"
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 w-full object-cover transition-all duration-75"
            />
            <Link
              to="/off-grid"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">Off-Grid Solar System</p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>



        <div className="px-2"
         onClick={() => handleClick("hybrid")}>
          <div className="relative">
            <img
              src={'https://img.freepik.com/free-photo/solar-pannels-wind-power-plant-outside_23-2149352234.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'}
              alt=""
              className="brightness-[50%] hover:brightness-[40%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-yellow-500 transition-all duration-300"
            >
              <p className="text-xl font-bold">Hybrid Solar Panel

              </p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Add more slides here manually if needed */}
      </Slider>
    </div>
    </div>
  );
};

export default CategorySlider;
