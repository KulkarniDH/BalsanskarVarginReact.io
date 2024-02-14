import React  from 'react'

import './Footer.css'
import './Button.css'
import { NavLink } from 'react-router-dom'
import { FaInstagram , FaFacebookSquare  } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
const Footer = () => {
 
  return (
        <>
            <section className="contact-short">
              <div className="grid grid-two-column">
                <div>
                  <h3>Ready to get started?</h3>
                  <h3>Talk to us today</h3>
                </div>
    
                <div>
                 
                    <NavLink to="/admission"> <button > Get Started   </button></NavLink>
                
                </div>
              </div>
            </section>
            {/* footer section */}
    
            <section className='footer-section'>
              <div className="container grid grid-four-column">
                <div className="footer-about">
                
                  <NavLink to="/">
    <img  className="logo" src='./image/logoplain.jpg' alt='my logo img'></img>
</NavLink>
<h3>Shree swami Samrth Balsanskarvarg</h3>

                </div>
                <div className="footer-menu">
                <h3>Menu</h3>
                <ul>

<li><NavLink  to="/">Home</NavLink></li>
<li><NavLink  to="/about">About</NavLink></li>
<li><NavLink  to="/courses">Courses</NavLink></li>
<li><NavLink to="/blog">Blog</NavLink></li>
<li><NavLink to="/playlist">Playlist</NavLink></li>
<li><NavLink  to="/contact">Contact</NavLink></li>
<div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS & CONDITIONS</p>
                  </div>
</ul>
                  {/* <h3>For More Details</h3>
                  <form action="#">
                    <input type="email" name="email" placeholder="YOUR E-MAIL" />
    
                 {/* <input type="submit" value="Submit" />  */}
               {/* <button className='footerbtn' >Submit</button> 
               
                  </form> */} 
                </div>
                <div className="footer-social">
                  <h3>Follow Us</h3>
                  <div className="footer-social--icons">
                  <div>
                     <a
                        href="https://www.instagram.com/kulkarni_dhanshri_?igsh=dnJtdGR2eGJ2MWpu"
                        target="_blank"> 
                       <FaInstagram className="icons" />
                      </a> 
                     
                    </div>
                    <div>
                     <a
                        href="https://www.facebook.com/profile.php?id=100077973700107&mibextid=ZbWKwL"
                        target="_blank"> 
                       <FaFacebookSquare  className='icons' />
                       </a> 
                     
                    </div>
                   
                    {/* <a
                        href= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.870596067101!2d73.8419478746504!3d18.444183671504245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebea1b4fdcb7%3A0x796cf0e6356610aa!2sShree%20Swami%20Samrth%20Bal%20Sanskar%20Varg!5e0!3m2!1sen!2sin!4v1706442888123!5m2!1sen!2sin"
                        target="_blank"> 
                        <HiOutlineBuildingOffice2 className='icons' />
                       </a>  */}
                   
                  </div>
                </div>
                <div className="footer-contact">
               
                <h3>Call Us</h3>
                  <a href='tel:9172715182'><h3>+91 9172715182</h3></a>

                <h3>Adress:S NO. 46/7B/1, FL 201,Vakratund 
                  Apartment Telco Colony Ambegaon B.K,
                   Narhe Ambegaon Rd, BU, Pune,
                    Maharashtra 411046</h3>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.870596067101!2d73.8419478746504!3d18.444183671504245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebea1b4fdcb7%3A0x796cf0e6356610aa!2sShree%20Swami%20Samrth%20Bal%20Sanskar%20Varg!5e0!3m2!1sen!2sin!4v1706442888123!5m2!1sen!2sin"
 
     height="100"
    
      allowFullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"> </iframe> */}
           
          
                </div>
              </div>
    
              <div className="footer-bottom--section">
                <hr />
                <div className="endline-page ">
                  <p>
                     {/* for chnaging year all the time javascript */}
                    Shree Swami Samrth Sanskar Varg. All Rights Reserved    @{new Date().getFullYear()}
                 </p>
                 
                </div>
              </div>
            </section>
          </>
  )
}

export default Footer
