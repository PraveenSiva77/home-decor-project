import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../components/Footer';

import { teamData } from '../database/Data';

import teamImage from '../assets/img/team.png';

function AboutUs() {
    
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative w-full h-[300px] bg-cover bg-top" style={{ backgroundImage: `url('${teamImage}')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </div>

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
          <p className="text-gray-600">About Us</p>
        </div>

        {/* About Us Content */}
        <div className="w-full flex flex-col gap-16 bg-white py-10 px-6 md:px-10">
            <div className="w-full flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-5">
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>

                <p className="text-gray-600 text-center max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum. 
                Our mission is to provide the best services with innovative solutions. We pride 
                ourselves on delivering quality and exceeding expectations.
                </p>
            </div>
        </div>

        {/* Team/Highlight Section */}
        <div className="w-full bg-gray-50 py-10 px-3 md:px-10">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">Meet Our Team</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {
                teamData.map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={item.img} alt="Team Member 1" className="w-full h-56 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                            <p className="text-gray-600">{item.role}</p>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default AboutUs;
