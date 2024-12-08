import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHead from './SectionHead';
import WhyUsImg from '../assets/img/why-us.png';

function WhyUs() {
 
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-16 gap-8">
      <SectionHead
        title="Why Us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />

      {/* Section Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-0 md:mt-4 w-full">
        {/* Text Content */}
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start justify-center gap-8 order-2 md:order-1">
          <p className="text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corrupti hic sapiente rerum eligendi,
            voluptate amet quas earum itaque porro. Doloribus porro mollitia aspernatur assumenda ipsa maiores fugiat
            molestias esse.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corrupti hic sapiente rerum eligendi,
            voluptate amet quas earum itaque porro. Doloribus porro mollitia aspernatur assumenda ipsa maiores fugiat
            molestias esse.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis corrupti hic sapiente rerum eligendi,
            voluptate amet quas earum itaque porro. Doloribus porro mollitia aspernatur assumenda ipsa maiores fugiat
            molestias esse.
          </p>
          <Link
            to="/why-us"
            className="bg-[#172525] text-white px-4 py-2 rounded-md"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 order-1">
          <img
            src={WhyUsImg}
            alt="Why Us Image"
            className="aspect-video object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
