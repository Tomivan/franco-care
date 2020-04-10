import React from 'react';
import '../App.css';

export default function Card() {
    return(
      <div className="card-container">
        <div className="card-2">
          <img src={require('../images/disease.svg')} alt="" className="card-image"/>
          <p>Find Doctor</p>
        </div>
        <div className="card">
          <img src={require('../images/30-Doctor.svg')} alt="" className="card-image"/>
          <p>Consult a<br /> Doctor Now</p>
        </div>
        <div className="card">
          <img src={require('../images/Layer_2.svg')}  alt="" className="card-image"/>
          <p>24/7 <br/>Ambulance</p>
        </div>
        <div className="card">
          <img src={require('../images/book.svg')}  alt="" className="card-image"/>
          <p>Book <br/>Appointment</p>
        </div>
      </div>
    )
  }