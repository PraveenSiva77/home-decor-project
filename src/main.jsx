import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import WhyUs from './pages/WhyUs.jsx'
import Products from './pages/Products.jsx'
import ContactUs from './pages/ContactUs.jsx'


const router = createBrowserRouter([
  {
    path: '/home-decor-project/',
    element: <App />,
    children: [
      {
        path: '/home-decor-project/',
        element: <Home />,
      },
      {
        path: '/home-decor-project/why-us',
        element: <WhyUs />,
      },
      {
        path: '/home-decor-project/products',
        element: <Products />,
      },
      {
        path: '/home-decor-project/contact-us',
        element: <ContactUs />,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
