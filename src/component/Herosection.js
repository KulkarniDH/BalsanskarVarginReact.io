import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Button.css'


const Herosection = ({myData}) => {
 
   const {name,image}= myData;
  return (
    <>


       <section className='wrapper '>
        <div className='container '>
        <div className=' grid grid-two-column'>
        <div className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
            <h1>{name}</h1>
          
          <p >Sanskar remembers God. Man's personal life is free,
              To be cultured, developed and thereby create good, characterful, well-mannered individuals.
              Through that, a good society and alternatively a good and cultured, strong nation should be created
            This is the main purpose behind it.</p> 
            <NavLink to="/admission">
                <button >Join Now</button>
            </NavLink>
            </div>
            <div className='hero-section-image'>
             <figure>
                <img src={image} alt="hero-section" className='img-style'></img>
            </figure>
      
            </div>
        </div>

        </div>
    </section>
    </>
  )
}

export default Herosection
