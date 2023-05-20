import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import Slider from "infinite-react-carousel"
import ProductCard from "../productcard/ProductCard"
import { products } from "../../data/products"
import "./Products.scss"

const Products = () => {
  const navigate = useNavigate()
  return (
    <div className="section products">
         <div className="container">
              <div className="product-cards">
                <Slider className="slider" nextArrow={<span style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faArrowRight} /></span>} prevArrow={<span style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faArrowLeft} /></span>} arrowStyle={{color: 'white'}} slidesToShow={4} arrowsScroll={4}>
                  {products.map(product => (
                    <ProductCard item={product} key={product.id}/>
                  ))}
                </Slider>
              </div>
         </div>
    </div>
  )
}

export default Products;