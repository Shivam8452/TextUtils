
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';

function App() {
  return (
    <>
{/* <Navbar title="textUtils" aboutText="About textUtils" /> */}
<Navbar title="textUtils"/>
{/* <Navbar /> */}
<div className="container">
  <Textforms heading="Enter the text to analysis" text="Enter text"/>
</div>
<div className="container">
  <About/>
</div>
    </>
    
  );
}

export default App;
