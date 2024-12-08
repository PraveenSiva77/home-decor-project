import React from 'react';
import Header from './Header';
import Slider from './Slider';

import { sliderData } from '../database/Data';

function Hero() {
  return (
    <div className='h-dvh'>
      <Header />
      <Slider sliderData={sliderData} />
    </div>
  )
}

export default Hero