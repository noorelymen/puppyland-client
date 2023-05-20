import React from 'react'
import TopBar from '../../topbar'
import NavBar from '../../navbar'
import Footer from '../../footer'

export default function ShopArchive({children}) {
  return (
    <>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
    </>
  )
}
