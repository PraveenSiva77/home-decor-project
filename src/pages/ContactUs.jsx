import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

function ContactUs() {
  return (
<div className='container mx-auto flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='font-bold text-7xl'>Contact Us</h1>
        <p className='text-xl'>This Page is currently Under development</p>

        <Link 
          to='/' 
          className="flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded hover:text-blue-500 underline dark:bg-violet-400 dark:text-gray-900"
          >
            <IoIosArrowBack/> Back to Home
        </Link>
      </div>
    </div>
)
}

export default ContactUs