import React from 'react'
import './Commonform.css'
const Commonform = ({myInfo}) => {
    const{name,Button}=myInfo;
  return (
    <section className='section-contact'>
      
    <h2 className='common-heading'>{name} </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.870596067101!2d73.8419478746504!3d18.444183671504245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebea1b4fdcb7%3A0x796cf0e6356610aa!2sShree%20Swami%20Samrth%20Bal%20Sanskar%20Varg!5e0!3m2!1sen!2sin!4v1706442888123!5m2!1sen!2sin"
     width="100%" 
     height="400"
      style={{border:0}} 
      allowFullscreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='container'>
      <div className='contact-form'>
{/* action='formspree link ' */}
<form className='contact-inputs' action='https://formspree.io/f/xgegorqg' method='POST' >

<input
type='text'
placeholder='Username'
name='Username'

// privous data is not show thats why we use it
required 
autoComplete='off'></input>
<input
type='text'
placeholder='Mobile No'
name='Mobile No'

required
autoComplete='off'></input>
<input
type='email'
placeholder='Email'
name='Email'

required
autoComplete='off'></input>

<textarea name='Message'
cols="30"
rows="10"
placeholder='Enter your Message'
required
autoComplete='off'
></textarea>

<input type='submit' value={Button}></input>

</form>
      </div>

      </div>
</section>

  )
}

export default Commonform
