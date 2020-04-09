import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Link} from 'react-router-dom';
import './App.css';

function Navbar() {
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

function Heading() {
  return(
  <div className="heading">
    <h1>Be Attentive to<br/> Your Health</h1>
    <p>It is a long established fact that a reader will be distracted<br />
     by the readable content of a page when looking at its layout<br />
     The point of using a Lorem Ipsum is that it has a more-or-less</p>
     <button className="button-1">View More</button>
     <button className="button-2">Updtate of COVID-19</button>
     <img src={require('./images/unsplash.png')}  alt="" className="unsplash"/>
  </div>
  
  );
}

function Card() {
  return(
    <div className="card-container">
      <div className="card-2">
        <img src={require('./images/disease.svg')} alt="" className="card-image"/>
        <p>Find Doctor</p>
      </div>
      <div className="card">
        <img src={require('./images/30-Doctor.svg')} alt="" className="card-image"/>
        <p>Consult a<br /> Doctor Now</p>
      </div>
      <div className="card">
        <img src={require('./images/Layer_2.svg')}  alt="" className="card-image"/>
        <p>24/7 <br/>Ambulance</p>
      </div>
      <div className="card">
        <img src={require('./images/book.svg')}  alt="" className="card-image"/>
        <p>Book <br/>Appointment</p>
      </div>
    </div>
  )
}
function Peadiatrics() {
  return(
    <div className="peadiatrics">
      <div className="speciality">
        <div className="box">
          <h4>Speciality Units</h4>
          <p>At USA Neuroscience Foundation</p>
          <img src={require('./images/nurse.png')} alt="" className="nurse"/>
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
function Health() {
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
function Ceo() {
  return(
    <div className="ceo">
      <img src={require('./images/ceo.png')} alt="" className="ceo-image"/>
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
function Question() {
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
function Footer() {
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
function App() {
  return (
    <>
    <Navbar/><Heading/>
    <Card />
    <Peadiatrics />
    <Health />
    <Ceo />
    <Question/>
    <Footer/>
    </>
  );
}

ReactDOM.render(<App />,
  document.querySelector('#root'));

  export default App;
