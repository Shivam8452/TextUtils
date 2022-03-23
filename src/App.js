import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
{/* <Navbar title="textUtils" aboutText="About textUtils" /> */}
<Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
{/* <Navbar /> */}
<div className="container">
  <Textforms heading="Enter the text to analysis" text="Enter text" mode={mode}/>
</div>
<div className="container">
  <About/>
</div>
    </>
    
  );
}

export default App;
