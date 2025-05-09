import React, { useState } from "react";
import { styles } from "../../styles/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import G1 from '/assets/G1.jpg'
import G2 from '/assets/G2.jpg'
import G3 from '/assets/G3.jpg'
import G4 from '/assets/G4.jpg'
import G5 from '/assets/G5.jpg'
import G6 from '/assets/G6.jpg'
import G7 from '/assets/G7.jpg'

const images = [G1, G2, G3, G4, G5, G6, G7

];

const GallerySlider = () => {
  const [current, setCurrent] = useState(0);
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




  const thumbnailSettings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    // arrows: false,
    easing: 'easeOut',
    rows: 1,
    // centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1220,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       rows: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       centerMode: true,
    //       rows: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       rows: 1,
    //       centerMode: true,
    //     },
    //   },


    // ],
  };
  return (
    <div className={`${styles.paddingHorizontal} w-full lg:py-16 flex flex-col bodyBg`}>
      <div className="flex items-center justify-center gap-x-3 py-5 " data-aos="flip-up" >
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-xl md:text-4xl text-center  uppercase">
          Explore Our Works
        </p>
        <div className="border w-24 border-purple" />
      </div>
      {/* Main Image */}
      <div className="flex flex-col gap-4 pt-6" >
        <div>
          <img
          data-aos="zoom-in-up"
            src={images[current]}
            alt="main-gallery"
            className="h-auto w-full max-w-full rounded-lg  md:h-[480px]" />
        </div>

  

        {/* Thumbnail Slider */}
        <div>
          <Slider {...thumbnailSettings}>
            {images.map((img, index) => (
              <div key={index} className="grid  grid-cols-5 gap-x-4">
                <div
                  className="px-1">
                  {/* className="px-1 w-35 h-20 lg:w-full lg:h-60"> */}
                  <img
                  loading="eager"
                    data-thumbnail
                    src={img}
                    onClick={() => setCurrent(index)}
                    className={`object-cover object-center w-full  h-full  rounded-lg cursor-pointer `}
                    alt={`Thumbnail ${index}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;


