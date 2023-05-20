import React from 'react'
import NavBar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

export default function BaseLayout({children}) {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}
