import React from 'react'
import Herosection from './component/Herosection';
const About = () => {
  const data={
    name:"Shree Swami Samrth Balsanskarvarg",
    image:"./image/Poojaimg.jpg",
    }
   
  return (
     
      
       
         <>
          <section>
         
          <Herosection  myData={data}></Herosection>
          </section>
         </>
  )
}

export default About
