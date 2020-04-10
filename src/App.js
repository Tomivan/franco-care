import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Heading from './components/heading';
import Card from './components/card';
import Health from './components/health';
import Peadiatrics from './components/peadiatircs';
import Ceo from './components/ceo';
import Question from './components/question';
import Footer from './components/footer'
import './App.css';


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
