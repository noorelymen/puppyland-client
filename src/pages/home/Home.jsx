import React, { useEffect } from 'react'
import Hero from '../../components/hero'
import Breeds from  '../../components/breeds/Breeds'
import Products from  '../../components/products/Products'
import Filters from  '../../components/filters/Filters'
import Titles from '../../components/titles/Titles'
import PuppyList from '../../components/puppylist/PuppyList'
import './Home.scss'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Hero />      
      <Titles subtitle="Our breeds" title="Browse by breed"/>  
      <Breeds/>
      <Titles subtitle="Discover now" title="Latest puppies to adopt"/>  
      <Filters/>
      <PuppyList/>
      <Titles subtitle="Our products" title="The best dog food"/>  
      <Products/>
    </>
  )
}

