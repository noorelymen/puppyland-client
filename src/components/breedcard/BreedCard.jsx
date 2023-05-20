import React from 'react'
import './BreedCard.scss'
import { Link } from 'react-router-dom'

const BreedCard = ({item}) => {
  return (
    <Link to={`/breed/${item.name}`}>
      <div className='breed-card'>
        <img src={item.img} alt="" />
        <span className="name">{item.name}</span>
      </div>
    </Link>
  )
}

export default BreedCard;
