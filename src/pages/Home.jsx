import React from 'react'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div>
        <Hero/>
        <WhyUs/>
        <Features/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}
