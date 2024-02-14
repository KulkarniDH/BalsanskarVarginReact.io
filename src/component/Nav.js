import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

import { CgMenu ,CgClose  } from "react-icons/cg";

const Nav = () => {
    const[menuIcon,setmenuIcon]=useState();
  
  return (
   <>
  <section className='nav'>
    <div className={menuIcon ? "navbar active":"navbar" }>
    <ul className="navbar-lists">
<li>
    <NavLink className="navbar-link home-link" to="/"  onClick={()=>setmenuIcon(false)}>Home</NavLink>
</li>
<li>
    <NavLink className="navbar-link " to="/about"  onClick={()=>setmenuIcon(false)}>About</NavLink>
</li>

<li>
    <NavLink className="navbar-link " to="/courses"  onClick={()=>setmenuIcon(false)}>Courses</NavLink>
</li>
<li>
    <NavLink className="navbar-link " to="/blog"  onClick={()=>setmenuIcon(false)}>Blog</NavLink>
</li>
 
<li>
    <NavLink className="navbar-link " to="/playlist"  onClick={()=>setmenuIcon(false)}>Playlist</NavLink>
</li>
<li>
    <NavLink className="navbar-link " to="/contact"  onClick={()=>setmenuIcon(false)}>Contact</NavLink>
</li>
<li>
    <NavLink className="navbar-link " to="/admission"  onClick={()=>setmenuIcon(false)}>Admission</NavLink>
</li>


    </ul>
         {/* two button for open and close of menu */}
         <div className="mobile-navbar-btn">
         <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={()=>setmenuIcon(true)} />
         <CgClose name="close-outline" className="mobile-nav-icon close-outline" 
         onClick={()=>setmenuIcon(false)}
         /> 
         </div>
    </div>
  </section>
   </>
  )
}

export default Nav
