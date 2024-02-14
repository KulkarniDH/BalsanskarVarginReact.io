import React from 'react'
import Herosection from './component/Herosection'

const Home = () => {
const data={
name:"Balsnskarvarg",
image:"./image/kabir.jpg",

}
return (
   <>
    <section>
      <Herosection myData={data}></Herosection>
    </section>
   </>
  )
}

export default Home
