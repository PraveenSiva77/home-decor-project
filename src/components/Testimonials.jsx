import React from 'react';
import SectionHead from './SectionHead';
import { FaStar } from "react-icons/fa";
import { testimonialData } from '../database/Data';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className='p-8 md:p-16'>
        <SectionHead
            title="Testimonials"
            subtitle="What our customers say"
        />
      
      <div className='px-0 py-0 md:px-16 md:py-6'>
        <Slider {...settings}>
          {
            testimonialData.map((item, index) => (
              <div key={index} className='!flex flex-col items-center justify-center p-4 gap-4'>
                
                <div className='flex flex-col items-center justify-center gap-4 translate-y-1/2'>
                  <img src={item.img} alt={item.name} className='w-24 h-24 rounded-full object-cover' />
                </div>

                <div className='flex flex-col items-center justify-center text-center gap-3 bg-white p-4 rounded-xl border-[1px] border-gray-500 shadow-lg'>
                  <p className='text-gray-700 mt-8'>
                    {item.desc}
                  </p>
                  <h1 className='font-bold'>{item.name}</h1>

                  {/* Star Ratings */}
                  <div className='flex items-center gap-2'>
                    {
                      [...Array(5)].map((_, index) => (
                        <span className={index < item.rating ? 'text-yellow-900' : 'text-gray-400'} key={index}>
                          <FaStar />
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
