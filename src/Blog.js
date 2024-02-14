import React from 'react'
import Blogd from './component/Blogd'
import menu from './component/Blogdata'

const Blog = () => {
  return (
   <section className='container'>
     
   <div className= ' grid grid-three-column'>

   {
    menu.map((cureval,index)=>{
      return(

  
      <Blogd 
      imgsrc={cureval.imgsrc}
      name={cureval.name}
      category={cureval.category} 
      link={cureval.link}
     > </Blogd>
        )
    })
   }
   </div>
   </section>
  )
}

export default Blog
