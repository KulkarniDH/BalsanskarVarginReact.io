import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import "./Header.css"
const Header = () => {
  return (
    <div>
       <section className='Mainheader'>
<NavLink to="/">
    <img  className="logo" src='./image/logoplain.jpg' alt='my logo img'></img>
</NavLink>
<Nav></Nav>

    </section>
    </div>
  )
}

export default Header
