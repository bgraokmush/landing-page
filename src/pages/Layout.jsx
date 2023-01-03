import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar} from '../scenes'


const Layout = () => {
  return (
      <div>
          <Navbar/>
          <Outlet />
    </div>
  )
}

export default Layout