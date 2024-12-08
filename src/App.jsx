import react,{ useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'

import { navData } from './database/Data'

function App() {

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Routes>
        
        {
          navData.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            )
          })
        }

        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
