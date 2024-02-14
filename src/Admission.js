import React from 'react'
import Commonform from './component/Commonform'

const Admission = () => {
    const info={
        name:"Admission Form",
        Button:"Sumbit",
  }
  return (
    
<Commonform myInfo={info}></Commonform>
  )
}

export default Admission
