import React from "react"
import window2 from './image/window2.jpeg'
import div1 from './image/div1.jpeg'
import div2 from './image/div2.jpeg'
import div3 from './image/div3.jpeg'
import div4 from './image/div4.jpeg'
import laddy1 from './image/laddy1.jpeg'
import laddy2 from './image/laddy2.jpeg'
import laddy3 from './image/laddy3.jpeg'
import laddy4 from './image/laddy4.jpeg'
const Services = () => {
    return(
        <>
        <div id='name2'>
  <div id='name1'>
<h3>Travel to make memories all <br />around the world</h3>
<button id='btn3'>View All</button>
</div>
<div id='div1'>
<div className="container my-5">
  <div className="subdiv p-4">
    <i className="fa-solid fa-calendar-days"></i>
    <h4>Book & Relax</h4>
    <p className="some">Your adventure begins with just one click. Book a flight to your dream destination today.</p>
  </div>
</div>
<div className="container my-5">
  <div className="subdiv p-4">
  <i className="fa-solid fa-download"></i>
    <h4>Smart Checklist</h4>
    <p className="some">Your adventure begins with just one click. Book a flight to your dream destination today.</p>
  </div>
</div>

<div className="container my-5">
  <div className="subdiv p-4">
  <i className="fa-solid fa-bookmark"></i>
    <h4>Save More</h4>
    <p className="some">Your adventure begins with just one click. Book a flight to your dream destination today.</p>
  </div>
</div>
</div>
</div>
<div id='maindiv'>
<div id='image'>
  <div id='imag1'>
    <img src={window2}  alt="..." id="img1" />
  </div>
  </div>
<h4>Unaccompained Minor Lounge</h4>
<div id='cls'>
<div id='class'>
<h5>Help through the airpat</h5>
<p>Arrive at least 2-3 hours before your flight to allow time for check-in, security screening, and any unexpected delays.</p>
</div>
<div id='class'>
<h5>Priority Boording</h5>
<p>Arrive at least 2-3 hours before your flight to allow time for check-in, security screening, and any unexpected delays.</p>
</div>
</div>
<div id='cls'>
<div id='class'>
<h5>Core on the flight</h5>
<p>Arrive at least 2-3 hours before your flight to allow time for check-in, security screening, and any unexpected delays.</p>
</div>
<div id='class'>
<h5>Chouffeur-drive service</h5>
<p>Arrive at least 2-3 hours before your flight to allow time for check-in, security screening, and any unexpected delays.</p>
</div>
</div>
</div> <br /> <br/>

<center>Top travelers of this month!</center>
<div id='divimg'>
  <div id='imgdiv'>
<img src={div1}  alt="..." id="img5" />
<img src={laddy1}  alt="..." id="laddy-img" />
<h5>John Deo</h5>
</div>
<div id='imgdiv'>
<img src={div2}  alt="..." id="img5" />
<img src={laddy2}  alt="..." id="laddy-img" />
<h5>John Deo</h5>
</div>
<div id='imgdiv'>
<img src={div3}  alt="..." id="img5" />
<img src={laddy3}  alt="..." id="laddy-img" />
<h5>John Deo</h5>
</div>
<div id='imgdiv'>
<img src={div4}  alt="..." id="img5" />
<img src={laddy4}  alt="..." id="laddy-img" />
<h5>John Deo</h5>
</div>
</div>
        </>
    )
}

export default Services;