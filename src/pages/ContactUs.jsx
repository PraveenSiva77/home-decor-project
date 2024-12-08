import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Footer from '../components/Footer';

function ContactUs() {
  return (
    <>
      <div className='mb-10'>
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
          <p className="text-gray-600">Contact Us</p>
        </div>

        {/* Contact Us Section */}
        <div className='container mx-auto py-2 md:py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Contact Info */}
            <div className='bg-white md:shadow-lg p-8 rounded-lg md:border-t-4 border-primary'>
              <h2 className='text-3xl font-semibold text-gray-800 mb-6'>Get in Touch</h2>
              <p className='text-gray-600 mb-8'>
                We’d love to hear from you! Please feel free to reach out with any questions or feedback.
              </p>

              <div className='flex flex-col gap-6'>
                <div>
                  <p className='text-gray-600 font-medium mb-2'>Address:</p>
                  <p className='text-gray-700'>123 Main St, Anytown, USA</p>
                </div>

                <div>
                  <p className='text-gray-600 font-medium mb-2'>Phone:</p>
                  <p className='text-gray-700'>+1 (123) 456-7890</p>
                </div>

                <div>
                  <p className='text-gray-600 font-medium mb-2'>Email:</p>
                  <p className='text-gray-700'>info@example.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white md:shadow-lg p-8 rounded-lg md:border-t-4 border-primary'>
              <h2 className='text-3xl font-semibold text-gray-800 mb-6'>Send Us a Message</h2>
              <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='text-gray-600 font-medium mb-2'>Name</label>
                    <input 
                      type='text' 
                      id='name' 
                      className='w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition' 
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='text-gray-600 font-medium mb-2'>Email</label>
                    <input 
                      type='email' 
                      id='email' 
                      className='w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition' 
                    />
                  </div>
                </div>

                <div className='mt-6'>
                  <label htmlFor='message' className='text-gray-600 font-medium mb-2'>Message</label>
                  <textarea 
                    id='message' 
                    className='w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition' 
                    rows='5'
                  ></textarea>
                </div>

                <button 
                  type='submit' 
                  className='bg-primary text-white px-6 py-3 rounded-md mt-6 hover:bg-primary-dark transition-colors'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </>
  );
}

export default ContactUs;
