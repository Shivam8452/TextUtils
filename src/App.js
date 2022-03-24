import React, { useState } from 'react'
import './App.css';
 import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      tpe:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled","success")
      document.title = "TextUtils - Dark mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light Mode Enabled","success")
      document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>
<Router>
<Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
<Alert Alert="this is alert" alert={alert}/>
<div className="container">
<Switch>
        <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <Textforms showAlert={showAlert} heading="Enter the text to analysis" text="Enter text" mode={mode}/>
          </Route>
  </Switch>
</div>
</Router>
    </>
    
  );
}

export default App;
