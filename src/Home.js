import React from 'react';
import c111 from './image/c111.jpeg'; 
import c2 from './image/c2.jpeg';
import c3 from './image/c3.jpeg'
import pic from './image/pic.jpeg'
import window2 from './image/window2.jpeg'
import div1 from './image/div1.jpeg'
import div2 from './image/div2.jpeg'
import div3 from './image/div3.jpeg'
import div4 from './image/div4.jpeg'
import laddy1 from './image/laddy1.jpeg'
import laddy2 from './image/laddy2.jpeg'
import laddy3 from './image/laddy3.jpeg'
import laddy4 from './image/laddy4.jpeg'

const Home = () => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-aos="fade-right">
  <div class="carousel-inner" id="carousel" data-bs-interval="1000">
    <div class="carousel-item active">
      <img src={c111} class="d-block w-100" alt="..." id="car" />
      <div class="carousel-caption d-none d-md-block">
      <h1 id='some1'>Explore New Destinations</h1>
        <p id='some1'>Your adventure begins with just one click. Book a flight to your dream destination today.</p>
        <button class="btn2">Book Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={c2} class="d-block w-100" alt="..." id="car" />
      <div class="carousel-caption d-none d-md-block">
      <h1 id='some1'>Fly to Your Dream</h1>
        <p id='some1'>Discover amazing places and make unforgettable memories. Start your journey now.</p>
        <button class="btn2">Learn More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" alt="..." id="car" />
      <div class="carousel-caption d-none d-md-block">
      <h1 id='some1'>Explore New Destinations</h1>
        <p id='some1'>Your adventure begins with just one click. Book a flight to your dream destination today.</p>
        <button class="btn2">Book Now</button>
      </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="sample1">
  <div class="sample">
    <h6 class="h6">Economy</h6>
    <h6 class="h6">BusinessClass</h6>
    <h6 class="h6">FirstClass</h6>
</div>
<div class="sample2">
<div class="sub">
  <i class="fa-solid fa-location-dot"></i>
  <h5>Location</h5>
  <input placeholder="Search" id="input" type='text'></input>
</div>
<div class="sub">
  <i class="fa-solid fa-user"></i>
  <h5>Travelers</h5>
   <input placeholder="Person" id="input" type='number'></input>
</div>
<div class="sub">
<i class="fa-solid fa-calendar-days"></i>
  <h5>Check In</h5>
  <input placeholder="add date" id="input" type='date'></input>
</div>
<div class="sub">
<i class="fa-solid fa-calendar-days"></i>
  <h5>Check Out</h5>
  <input placeholder="date" id="input" type='date'></input>
</div>
<div class="sub">
  <button>Search Flight</button>
</div>
</div>
</div> <br /> <br /> 
<div class="main">
  <span class="span">TRAVAL SUPPORT</span> <br/> <br /> 
  <h5 align="center">Plan your travel with confidence</h5>
  <div id='image'>
  <div id='imag1'>
    <img src={pic}  alt="..." id="img" />
  </div>
  </div> <br />
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
</div> <br/> <br />
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
<footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h3>About Us</h3>
      <p>We offer the best flight travel experience with unbeatable prices. Explore the world with ease!</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li>Home</li>
        <li>Book a Flight</li>
        <li>Manage Booking</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: kavya@flighttravel.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: 23A Travel St, City, London</p>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <div class="social-icon"><i class="fa-brands fa-facebook"></i></div>
        <div class="social-icon"><i class="fa-brands fa-twitter"></i></div>
        <div class="social-icon"><i class="fa-brands fa-instagram"></i></div>
        <div class="social-icon"><i class="fa-brands fa-linkedin"></i></div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Flight Travel. All rights reserved.  <span id='s'>N.KAVYA</span></p>
  </div>
</footer>

    </>
  );
}

export default Home;
