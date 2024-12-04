import React from "react"
import pic from './image/pic.jpeg'
const About = () =>{
    return(
        <>
        <div class="main">
  <span class="span">TRAVAL SUPPORT</span> <br/> <br /> 
  <h5 align="center">Plan your travel with confidence</h5>
  <div id='image'>
  <div id='imag1'>
    <img src={pic}  alt="..." id="img" />
  </div>
  </div>
  <div class="main1">
    <button id='btn'>01</button>
    <h3>Travel requirements for Dubai</h3>
    <p id='p1'>Catch a smooth flight to your destination with premium in-flight entertainment. <br/> 
    Relax in comfortable seating designed for maximum comfort and convenience.</p>
  </div>
  <div class="main1">
    <button id='btn1'>02</button>
    <h3>Chouffeur services at your arrival</h3>
    <p  id='p1'>Catch a smooth flight to your destination with premium in-flight entertainment. <br/> 
    Relax in comfortable seating designed for maximum comfort and convenience.</p>
  </div>
  <div class="main1">
    <button id='btn2'>03</button>
    <h3>Multi-rish travel insurance</h3>
    <p id='p1'>Catch a smooth flight to your destination with premium in-flight entertainment. <br/> 
    Relax in comfortable seating designed for maximum comfort and convenience.</p>
  </div>
</div>
        </>
    )
}
export default About;