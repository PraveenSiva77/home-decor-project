import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { productData } from '../database/Data';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Footer from '../components/Footer';

function Products() {
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars).fill(<FaStar className='text-yellow-400' />)}
        {Array(halfStars).fill(<FaStarHalfAlt className='text-yellow-400' />)}
        {Array(emptyStars).fill(<FaRegStar className='text-gray-400' />)}
      </>
    );
  };

  return (
    <>
      <div>
        {/* Breadcrumb */}
        <div className="w-full bg-gray-100 py-4 flex items-center gap-3 px-3 md:px-10">
          <Link 
            to='/'
            className="flex items-center justify-center gap-2"
          >
            <IoIosArrowBack className="text-gray-600 text-base hover:text-blue-500" />
            <p className="text-gray-600 font-medium hover:text-blue-500">Home</p>
          </Link>
          <span className="text-gray-500">/</span>
          <p className="text-gray-600">Products</p>
        </div>

        {/* Products */}
        <div className='w-full py-10 px-6 md:px-16'>
          <h2 className='text-3xl font-semibold'>Our Products</h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10'>
            {productData.map((item, index) => {
              return (
                <div 
                  key={index} 
                  className='w-full bg-white rounded-lg border-[1px] border-gray-800 shadow-lg overflow-hidden transform transition-transform hover:scale-105'
                >
                  {/* Product Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className='w-full h-40 object-contain mt-2' 
                  />

                  {/* Product Details */}
                  <div className='p-4'>
                    {/* Product Title */}
                    <h3 className='text-lg font-semibold text-gray-800 truncate'>
                      {item.title}
                    </h3>

                    {/* Rating */}
                    <div className='flex items-center gap-1 mt-2'>
                      {getStars(item.rating)}
                    </div>

                    {/* Price */}
                    <p className='text-lg font-semibold text-primary mt-2'>
                      ₹{item.price}
                    </p>

                    {/* Description */}
                    <p className='text-sm text-gray-500 mt-1 truncate'>
                      {item.desc}
                    </p>

                    {/* Add to Cart Button */}
                    <button 
                      className='w-full mt-4 bg-blue-700 text-white py-2 rounded-lg hover:bg-primary-dark transition'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Products;
