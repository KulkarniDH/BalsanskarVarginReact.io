import React from 'react'
import './Arrange.css'
const Blogd = (props) => {
  return (
   <section className='container '>
    <h2 className='common-heading'>Blog</h2>
    <div className=' grid grid-four-column' >  
 <div className='arrange-data'>


<div>
<img src={props.imgsrc} alt='My-pic' className='arrange-img'></img>
 </div>
 
 <div>
  <h2>{props.name}</h2>
 <h3>{ props.category}</h3> 
 <a href={props.link}><button  className='arrange-button'>Click Here</button></a>
 </div>
 </div>
       </div>   
    
   </section>
  )
}

export default Blogd
