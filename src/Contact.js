import React from 'react'

import Commonform from './component/Commonform';
const Contact = () => {
const info={
      name:"Contact Page",
      Button:"send",
}


  return (
   <Commonform myInfo={info}></Commonform>
   
)
}



export default Contact
