import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import './Gallery.css'
const CategorySlider = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='Next'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M10 6l6 6-6 6V6z" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='Prev'
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#FFEEA9" // Icon color
          width="24px"
          height="24px"
        >
          <path d="M14 18l-6-6 6-6v12z" />
        </svg>
      </div>
    );
  };
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services`);
  };

  return (
    <div
      className={`${styles.paddingHorizontal} w-full py-6 lg:py-24 flex flex-col gap-y-8 bodyBg`}
    >
      {/* <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-4xl uppercase">
       Categories
        </p>
        <div className="border w-full border-purple" />
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
      <h2 className="text-5xl font-bold">
       Our Services
        </h2> 
      
      </div> */}
      <div className="flex items-center justify-center gap-x-3 py-5">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-4xl uppercase">
          Our Categories of Services
        </p>
        <div className="border w-24 border-purple" />
      </div>
      <div className="w-full px-4">
        <Slider {...settings}>
          {/* Residential */}
          <div className="px-2"
            onClick={handleClick}>
            <div className="relative">
              <img
                src={'/assets/HOME.jpg'}
                alt="Residential Solar Panels"
                className="brightness-[100%] hover:brightness-[100%] h-96 transition-all duration-75"
              />
              <Link
                to="/services"
                className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
              >
                <p className="text-xl font-bold">Residential Solar Panels</p>
                {/* <BsArrowRight className="text-2xl" /> */}
              </Link>
            </div>
          </div>


          {/*institute solar panel */}
          <div className="px-2"
            onClick={handleClick}>
            <div className="relative">
              <img
                src="/assets/INS.jpg"
                alt="Institution Solar Panels"
                className="brightness-[100%] hover:brightness-[100%] h-96 w-full object-cover transition-all duration-75"
              />
              <Link
                      to="/services"
                className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
              >
                <p className="text-xl font-bold">Institution Solar Panels</p>
                {/* <BsArrowRight className="text-2xl" /> */}
              </Link>
            </div>
          </div>


          {/* Commercial */}
          <div className="px-2"
            onClick={handleClick}>
            <div className="relative">
              <img
                src="\assets\COMMERCIAL .jpg"
                alt=" Commercial Solar Panels"
                className="brightness-[100%] hover:brightness-[100%] h-96 w-full object-cover transition-all duration-75"
              />
              <Link
                     to="/services"
                className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
              >
                <p className="text-xl font-bold">Commercial Solar Panels</p>
                {/* <BsArrowRight className="text-2xl" /> */}
              </Link>
            </div>
          </div>




          <div className="px-2"
            onClick={handleClick}>
            <div className="relative">
              <img
                src={'/assets/industrial.jpg'}
                alt=" Industrial Solar Panels"
                className="brightness-[100%] hover:brightness-[100%] h-96 transition-all duration-75"
              />
              <Link
                  to="/services"
                className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
              >
                <p className="text-xl font-bold">Industrial Solar Panels

                </p>
                {/* <BsArrowRight className="text-2xl" /> */}
              </Link>
            </div>
          </div>





          {/* <div className="px-2"
         onClick={handleClick}>
          <div className="relative">
            <img
              src={'https://gepsenergy.com/assets/images/blog/single/On-Grid-System.webp'}
              alt=""
              className="brightness-[100%] hover:brightness-[100%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
            >
              <p className="text-xl font-bold">On-Grid Solar System

              </p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div> */}

          {/* Off-Grid (your provided div) */}
          {/* <div className="px-2"
         onClick={handleClick}>
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/beautiful-alternative-energy-plant-with-solar-panels_23-2149192692.jpg?t=st=1744366085~exp=1744369685~hmac=686c0f561284d3c632f1c8732c28a0f82238392d8e0f9f3a8087357c0127ba3b&w=740"
              alt=""
              className="brightness-[100%] hover:brightness-[100%] h-96 w-full object-cover transition-all duration-75"
            />
            <Link
              to="/off-grid"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
            >
              <p className="text-xl font-bold">Off-Grid Solar System</p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div> */}



          {/* <div className="px-2"
         onClick={handleClick}>
          <div className="relative">
            <img
              src={'https://img.freepik.com/free-photo/solar-pannels-wind-power-plant-outside_23-2149352234.jpg?ga=GA1.1.701827324.1739344996&semt=ais_hybrid&w=740'}
              alt=""
              className="brightness-[100%] hover:brightness-[100%] h-96 transition-all duration-75"
            />
            <Link
              to="/living-rooms"
              className="absolute bottom-10 left-8 z-20 text-white flex items-center gap-2 hover:text-purple transition-all duration-300"
            >
              <p className="text-xl font-bold">Hybrid Solar Panel

              </p>
              <BsArrowRight className="text-2xl" />
            </Link>
          </div>
        </div> */}


        </Slider>
      </div>
    </div>
  );
};

export default CategorySlider;
