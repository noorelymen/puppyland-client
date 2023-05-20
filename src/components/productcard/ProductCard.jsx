import React from 'react'
import './ProductCard.scss'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <Link to={`/products/${item.title}`}>
      <div className='product-card'>
        <img src={item.img} alt="" />
        <span className="title">{item.title}</span>
      </div>
    </Link>
  )
}

export default ProductCard;
