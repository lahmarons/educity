import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container '>
        <div className='hero-text'>
            <h1>we Ensure better education for a better world </h1>
            <p>L'éducation englobe le processus de formation et de développement des qualités physiques, intellectuelles, morales et sociales d'une personne, généralement un enfant ou un adolescent</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''></img></button>
        </div>
    </div>
  )
} 

export default Hero