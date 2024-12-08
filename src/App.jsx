import react,{ useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import WhyUs from './pages/WhyUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

import { navData } from './database/Data'

function App() {

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Outlet />
    </div>
  )
}

export default App
