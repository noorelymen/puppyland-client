import React from 'react'
import NavBar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'

export default function ArchivePage({children}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
