import React from 'react'
import { styles } from '../../styles/styles'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {

  const testimonials = [
    {
      test: "We’ve been using Mybay for 6 months now, and our energy bills have been slashed in half. The installation was fast and professional.",
      name: "Priya & Rahul",
      place: "Bengaluru",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80'
    },
    {
      test: "Mybay’s solar panels are sleek and fit beautifully with our modern home design. Plus, the energy savings have been amazing!",
      name: "Sandeep & Anjali",
      place: "Mumbai",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80'
    },

  ];

  return (
    <div>
      <div className={`w-full ${styles.paddingHorizontal} py-6 lg:py-16 bodyBg flex flex-col gap-y-10`}>
        <div className="flex items-center justify-center gap-x-3 py-5" data-aos="flip-up" >
          <div className="border w-24 border-purple" />
          <p className="text-purple font-bold text-xl text-center md:text-4xl uppercase">
            What People say
          </p>
          <div className="border w-24 border-purple" />
        </div>
        {/* <div className="flex items-center justify-start gap-x-3">
          <div className="border w-24 border-purple" />
          <p className="text-purple font-normal text-sm uppercase">
            TESTIMONIALS
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-y-6 lg:gap-y-0">
          <h2 className="text-5xl font-bold">What People Say</h2>
        </div> */}

        <div className="relative w-full max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <section className="my-8 flex items-center justify-center">
                  <div className=" flex items-center justify-center lg:px-10">
                    <div className="flex flex-col max-w-sm mx-4 my-6  shadow-lg">
                      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-white">
                        <p className="relative px-6 py-1 text-lg italic text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="purple" className="w-8 h-8">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                          </svg>{testimonial.test}
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="purple" className="absolute right-0 w-8 h-8">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                          </svg>
                        </p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-8 bg-purple rounded-b-lg">
                        {/* <img src={testimonial.image} alt="Customer" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" /> */}
                        <p className="text-xl font-semibold text-white leading-tight">{testimonial.name}</p>
                        <p className="text-sm text-white uppercase">{testimonial.place}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-purple text-purple hover:bg-purple-100 p-2 rounded-full shadow-md z-10">
            <ChevronLeft size={24} className='text-white' />
          </button>
          <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple text-purple hover:bg-purple-100 p-2 rounded-full shadow-md z-10">
            <ChevronRight size={24} className='text-white' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
