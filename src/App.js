import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toogleBlue = () => {
    if (mode === 'light') {
      setMode('blue');
      document.body.style.backgroundColor = '#021633';
      showAlert("Blue mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleBlue={toogleBlue} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About mode = {mode} toogleBlue = {toogleBlue}/>
            </Route>
            <Route exact path="/textutils">
              <TextForm showAlert={showAlert} heading="Try TextUtils - word counter,character counter,remove extra spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
// {/* <div className = "container">
//     <About/>
//     </div> */}

export default App;