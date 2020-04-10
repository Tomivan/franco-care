import React from 'react';
import '../App.css';


export default function Footer() {
    return(
      <div className="footer">
        <h5>Franco CARE</h5>
        <div className="footer-nav">
          <div className="product">
            <h6>Product</h6>
            <p>Chat</p>
            <p>Event</p>
            <p>Customers</p>
            <p>Stories</p>
          </div>
          <div className="services">
            <h6>Srevices</h6>
            <p>For Individuals</p>
            <p>Location</p>
            <p>Doctors</p>
            <p>Head Coaches</p>
          </div>
          <div className="company">
            <h6>Company</h6>
            <p>About</p>
            <p>Mission</p>
            <p>Origin</p>
            <p>Careers</p>
          </div>
          <div className="more">
            <h6>More</h6>
            <p>Log In</p>
            <p>Alternatives</p>
            <p>Conditions</p>
            <p>Faq</p>
          </div>
        </div>
      </div>
    )
  }