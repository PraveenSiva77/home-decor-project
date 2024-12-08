import React from 'react'
import SectionHead from './SectionHead'

import { featuredData } from '../database/Data'

function Features() {
  return (
    <>
        <div className='p-8 md:p-16 md:pb-12'>
            <SectionHead
                title='Featured Categories'
                subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
            />

            {/* Featured Categories Grid*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 my-10">
                {/* Large Image */}
                <div className="relative col-span-1 md:col-span-2 row-span-2 hover:scale-105 transition-transform duration-300 hover:shadow-md">
                    <img
                    src={featuredData[0].img}
                    alt={featuredData[0].title}
                    className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 text-xs px-2 py-1 text-white bg-black bg-opacity-50 rounded">
                    {featuredData[0].title}
                    </div>
                </div>

                {/* Smaller Images */}
                {featuredData.slice(1).map((feature, index) => (
                    <div key={index} className="relative hover:scale-105 transition-transform duration-300 hover:shadow-md">
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 text-xs px-2 py-1 text-white bg-black bg-opacity-50 rounded">
                            {feature.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Featured Categories List */}
        <div className='w-full py-8 px-10 md:px-24 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 justify-items-center gap-6 bg-gray-300'>
            {
                featuredData.map((feature, index) => (
                    <div key={index} className="flex items-center my-4">
                        <div className='flex flex-col items-center justify-center gap-4 hover:scale-110 transition-transform duration-300'>
                            <p className='text-3xl'>{feature.icon}</p>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Features