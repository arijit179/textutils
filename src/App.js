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
  // const removeBodyClasses=() => {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  // }
  const toogleMode = (cls) => {
    // removeBodyClasses();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#021633';
      showAlert("Dark mode has been enabled", "success");
      // document.body.classList.add('bg-'+cls);
      // showAlert(cls+" mode has been enabled", cls);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";

    // }
  }
}
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Switch>
            <Route exact path="/about">
              <About mode = {mode}/>
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