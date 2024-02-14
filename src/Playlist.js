import React from 'react'
import Card from './component/Card';
import data from './component/Carddata';
const Playlist = () => {
  return (
    <section>
   
    <div className='container '>
    
   <div className='grid grid-three-column'>


   
    {data.map((val,index)=>{
      return(
        <Card 
              imgsrc={val.imgsrc}
               title={val.title}
               name={val.name}
               link={val.link}
               ></Card>
      )
      })
     
      }
      </div>
      </div> 
      </section>
  )
}

export default Playlist
