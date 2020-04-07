import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Navbar() {
  return(
    <div>
      <p> Franco CARE</p>
      <ul>
        <li>Clinics & Centers</li>
        <li>Packages</li>
        <li>Contact</li>
      </ul>
      {/* <a link="#">Sign Up</a> */}
    </div>
  );
}

function Heading() {
  return(
  <div>
    <h1>Be Attentive to Your Health</h1>
    <p>It is a long established fact that a reader will be distracted<br />
     by the readable content of a page when looking at its layout<br />
     The point of using a Lorem Ipsum is that it has a more-or-less</p>
     <button>View More</button>
     <button>Updtate of COVID-19</button>
     <img src="src/images/unsplash.png" alt="" />
  </div>
  
  );
}

function Card() {
  return(
    <div>
      <div className="card">
        <img src="" alt="" />
        Find Doctor
      </div>
      <div className="card">
        <img src="" alt="" />
        Consult a Doctor Now
      </div>
      <div className="card">
        <img src="" alt="" />
        24/7 Ambulance
      </div>
      <div className="card">
        <img src="" alt="" />
        Book Appointment
      </div>
    </div>
  )
}
function Peadiatrics() {
  return(
    <div>
      <div>
        <div className="box">
          <h4>Speciality Units</h4>
          <p>At USA Neuroscience Foundation</p>
          <img src="./images/nurse" alt=""/>
        </div>
      </div>
      <div>
        <h4>Children's Peadiatrics Center</h4>
        <p>It is a long established fact that a reader will<br />
           be distracted by the readable content of a <br />
           page when looking at its layout. The point of <br />
           using a Lorem Ipsum is that it has a more-or-<br/>
           less normal distribution of letters, as<br/>
           opposed to using 'Content here, content <br/>
           here', making it look like readable English.</p>
        <button> Book Now</button>
    </div>
    </div>
  )
}
function Health() {
  return(
    <div>
      <div>
        <div className="box">
          <h4>Speciality Units</h4>
          <p>At USA Neuroscience Foundation</p>
          <img src="../images/nurse.png" alt=""/>
        </div>
      </div>
      <div>
        <h4>Children's Peadiatrics Center</h4>
        <p>It is a long established fact that a reader will<br />
           be distracted by the readable content of a <br />
           page when looking at its layout. The point of <br />
           using a Lorem Ipsum is that it has a more-or-<br/>
           less normal distribution of letters, as<br/>
           opposed to using 'Content here, content <br/>
           here', making it look like readable English.</p>
        <button> Book Now</button>
    </div>
    </div>
  )
}
function Ceo() {
  return(
    <div>
      <img src="" alt=""/>
      <div>
        <h6> Johnnie Walker</h6>
        <p>It is a long established fact that a reader will<br />
           be distracted by the readable content of a <br />
           page when looking at its layout. The point of <br />
           using a Lorem Ipsum is that it has a more-or-<br/>
           less normal distribution of letters, as<br/>
           opposed to using 'Content here, content <br/>
           here', making it look like readable English.</p>
      </div>
    </div>
  )
}
function Question() {
  return(
    <div>
      <h4>Have you any question</h4>
      <p></p>
      <input />
    </div>
  )
}
function Footer() {
  return(
    <div>
      <h5>Franco CARE</h5>
      <div>
        <div>
          <h6>Product</h6>
          <p>Chat</p>
          <p>Event</p>
          <p>Customers</p>
          <p>Stories</p>
        </div>
        <div>
          <h6>Srevices</h6>
          <p>For Individuals</p>
          <p>Location</p>
          <p>Doctors</p>
          <p>Head Coaches</p>
        </div>
        <div>
          <h6>Company</h6>
          <p>About</p>
          <p>Mission</p>
          <p>Origin</p>
          <p>Careers</p>
        </div>
        <div>
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
