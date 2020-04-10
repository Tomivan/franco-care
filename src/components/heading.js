import React from 'react';
import '../App.css';

export default function Heading() {
    return(
    <div className="heading">
      <h1>Be Attentive to<br/> Your Health</h1>
      <p>It is a long established fact that a reader will be distracted<br />
       by the readable content of a page when looking at its layout<br />
       The point of using a Lorem Ipsum is that it has a more-or-less</p>
       <button className="button-1">View More</button>
       <button className="button-2">Updtate of COVID-19</button>
       <img src={require('../images/unsplash.png')}  alt="" className="unsplash"/>
    </div>
    
    );
  }