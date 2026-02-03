 // isme kaam hoga ki home ke andar kya krna hia header ke andar ke components and all 
 //ye kaam App.jsx mai bhi ho skta tha but alag banaliya hao
 
 
 import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'////ye kaam aa hai ki sike andar ki cheezein change hoti rahnegi 
// header same footer same but iske andar ka item can be changed

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />   
  
    <Footer />
    </>
  )
}

export default Layout
