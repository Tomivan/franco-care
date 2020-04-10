import React from 'react';
import '../App.css';


export default function Ceo() {
    return(
      <div className="ceo">
        <img src={require('../images/ceo.png')} alt="" className="ceo-image"/>
        <div className="johnnie">
          <h6> Johnnie Walker</h6>
          <p>It is a long established fact that a reader will be<br />
             distracted by the readable content of a page when<br />
             looking at its layout. The point of using a Lorem Ipsum<br />
             is that it has a more-or-less normal distribution of<br/>
             letters, as opposed to using 'Content here, content <br/>
             here', making it look like readable English.</p>
        </div>
      </div>
    )
  }
  