import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from "react-router-dom";
import Slider from "infinite-react-carousel"
import BreedCard from "../breedcard/BreedCard"
import {cards} from "../../data/breedcards"
import "./Breeds.scss"

const Breeds = () => {
  const navigate = useNavigate()
  return (
    <div className="section breeds">
         <div className="container">
              <div className="breed-cards">
                <Slider className="slider" nextArrow={<span style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faArrowRight} /></span>} prevArrow={<span style={{ fontSize: '14px' }}><FontAwesomeIcon icon={faArrowLeft} /></span>} arrowStyle={{color: 'white'}} centerMode slidesToShow={5} arrowsScroll={5}>
                  {cards.map(card => (
                    <BreedCard item={card} key={card.id}/>
                  ))}
                </Slider>
              </div>
         </div>
    </div>
  )
}

export default Breeds;