import React from 'react';
import '../App.css';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Navbar() {
    return(
      <div className="navbar">
        <h5> Franco CARE</h5>
        <ul className="nav">
          <li>Clinics & Centers</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
        <Link to="#" className="link">Sign Up</Link>
      </div>
    );
  }