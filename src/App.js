// import logo from './logo.svg';
// import './App.css';
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from 'react'
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   // ham BrowserRouter naam se router ko pukaar sakta ha
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
//   //  upar ke sare chije hamne "react router dom se import kiya h"
// } from "react-router-dom";

// new version me switch ka naam replace kar dia h with Routes

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// yahan se ham  react aap ko edit karna start karenge
// hamloog function based component banayenge

// just for information... Bable compiles JSX down to React.createElement() calls.

// let name="Harry";
function App() {

  const [mode, setmode] = useState('light');// dark mode enable h ya light mode... ye check karne ke liye
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {

      setmode('dark');
      document.body.style.backgroundColor = '#0f0f41';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // tumne dekha hoga ki kuch chijen time interval me change hoti rehti h
      // wo ham aishe karte h

      // par we will not use it here... hh likin mazedar

      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // },2000)
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // },1500)
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }


  return (
    <>
      <Router>
      {/* to probs basically commonet h... aur us component ke andar jo variable h jisko tum yahan se hi change kar sakte ho */}
        <Navbar title="Textutils" Sachaie="About" mode={mode} togglemode={togglemode} />
        <Alert Alert={alert} />
        <div className="container my-3">
          
          <Routes>
            {/* we should always use exact with path.... koin ki aishe likhne se react exaxt matching karega */}
          <Route exact path="/About" element={< About mode = {mode} />}>
            {/* <About/> */}
          </Route>
            <Route exact path="/"
              element={<Textform showAlert={showAlert} Heading="Enter the Text to analyze below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
