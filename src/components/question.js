import React from 'react';
import '../App.css';

export default function Question() {
    return(
      <div className="question">
        <h4>Have you any question?</h4>
        <p>It is a long established fact that a reader will be distracted <br />
           by the readable content of a page when looking at its </p>
        <div className="input">
        <input name="email" placeholder="Enter your email" value=""/>
        <button className="button-1">Submit</button>
        </div>
      </div>
    )
  }
