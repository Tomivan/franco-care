import React from 'react';
import '../App.css';

export default function Health() {
    return(
      <div className="health">
        <div className="speciality-2">
          <div className="box-2">
            <h4>Speciality Units</h4>
            <p>At USA Neuroscience Foundation, you'll become part of a thriving medical.</p>
            <img src="../images/nurse.png" alt=""/>
          </div>
        </div>
        <div className="children-2">
          <h4>Health Screening Center Check-Up</h4>
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