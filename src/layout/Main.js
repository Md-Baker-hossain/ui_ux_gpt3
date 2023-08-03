import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../comtainer/footer/Footer'

const Main = () => {
  return (
     <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
     </>
  )
}

export default Main