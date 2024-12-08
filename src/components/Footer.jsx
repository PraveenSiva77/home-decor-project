import React from 'react'
import { footerData } from '../database/Data';
import AlertModal from './AlertModal';
import { Link } from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";

function Footer() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const onSubscribe = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    e.target.email.value = '';
    setEmail('')
  }
  
  return (
    <>
      <div className='p-16 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center border-t-2 border-gray-300'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>{'<spectra>'}</h1>
          <p className='text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias facere ratione quis soluta dicta nam rem blanditiis quo nulla dolores, veniam omnis harum, reprehenderit est corporis illum nisi magni tempora!
          </p>
          
          <div className='flex flex-col gap-8'>
            {/* Newsletter */}
            <div className='flex flex-col gap-4'>
              <p className='font-bold text-lg'>Weekly Newsletter</p>
              <p className='text-gray-700'>
                Get our awesome releases and latest updates with exclusive news and offers in your inbox.
              </p>

              <form 
                onSubmit={
                  onSubscribe
                }
                className='w-full md:w-max flex items-center rounded-md border border-gray-500 shadow-lg overflow-hidden'
              >
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='px-3 py-2 flex-grow text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#172525]'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                
                {/* Bell Icon for Mobile */}
                <button 
                  type="submit" 
                  className='md:hidden bg-[#172525] text-white rounded-md mr-1 px-3 py-2 flex items-center justify-center transition-colors hover:bg-[#1d3535] focus:ring-2 focus:ring-offset-2 focus:ring-[#172525]'
                >
                  <FaBell className='text-white text-lg' />
                </button>

                {/* Full Subscribe Button for Larger Screens */}
                <button
                  type='submit'
                  className='hidden md:block bg-[#172525] text-white px-4 py-1 mr-1 rounded-md transition-colors hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-[#172525]'
                >
                  Subscribe
                </button>
              </form>
            </div>        

            {/* Social Media */}
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-4'>
              <h1 className='ml-2 font-bold'>Follow Us On</h1>
              <div className='flex gap-4'>
                <div className='w-10 h-10 flex items-center justify-center text-xl rounded-full bg-gray-300 hover:text-blue-800 hover:shadow-xl hover:scale-105'>
                  <FaFacebookF />  
                </div>

                <div className='w-10 h-10 flex items-center justify-center text-xl rounded-full bg-gray-300 hover:text-blue-800 hover:shadow-xl hover:scale-105'>
                  <FaXTwitter />
                </div>

                <div className='w-10 h-10 flex items-center justify-center text-xl rounded-full bg-gray-300 hover:text-blue-800 hover:shadow-xl hover:scale-105'>
                  <FaInstagram />
                </div>

                <div className='w-10 h-10 flex items-center justify-center text-xl rounded-full bg-gray-300 hover:text-blue-800 hover:shadow-xl hover:scale-105'>
                  <FaYoutube />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Group Links based on title */}
          {
            footerData.map((item) => (
              <div key={item.id} className='flex flex-col items-center justify-center gap-4 text-center md:text-left'>
                <h1 className='font-bold'>{item.title}</h1>
                {
                  item.links.map((link) => (
                    <div key={link.id} className='flex gap-2 items-center justify-center'>
                      <Link to={link.path} className='hover:text-blue-800 text-gray-700'>
                        {link.title}
                      </Link>
                    </div>
                  ))
                }
              </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className='bg-gray-200 p-4'>
        <div className='flex justify-between items-center text-center'>
          <a 
            href='https://praveensiva77.github.io/praveenkumar-s' 
            target='blank'
            className='hover:text-blue-500'
          >

            Copyright &copy; 2023 Spectra. <span>All rights reserved.</span>
          </a>
          <div className='gap-4 hidden md:flex'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {
        isModalOpen && 
        <AlertModal
          title='Thank you for subscribing!'
          message='You will receive our weekly newsletter with exclusive offers and updates.'
          type='success'
          onClose={() => setIsModalOpen(false)}
        />
      }
    </>
  )
}

export default Footer