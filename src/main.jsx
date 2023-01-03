import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Contact, Home, Layout, Nopage, Products, Resources } from './pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Nopage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/resources",
        element: <Resources />
      },
      {
        path: "/contact",
        element: <Contact />
      }

    ]
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
