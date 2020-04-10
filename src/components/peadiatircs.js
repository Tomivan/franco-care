import React from 'react';
import '../App.css';

export default function Peadiatrics() {
    return(
      <div className="peadiatrics">
        <div className="speciality">
          <div className="box">
            <h4>Speciality Units</h4>
            <p>At USA Neuroscience Foundation</p>
            <img src={require('../images/nurse.png')} alt="" className="nurse"/>
          </div>
        </div>
        <div className="children">
          <h4>Children's Peadiatrics Center</h4>
          <p>It is a long established fact that a reader will<br />
             be distracted by the readable content of a <br />
             page when looking at its layout. The point of <br />
             using a Lorem Ipsum is that it has a more-or-<br/>
             less normal distribution of letters, as<br/>
             opposed to using 'Content here, content <br/>
             here', making it look like readable English.</p>
          <button className="button-1"> Book Now</button>
      </div>
      </div>
    )
  }
  