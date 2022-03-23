import React, {useState} from 'react'
import PropTypes from 'prop-types'
export default function Textforms(props) {
  const Uppercase = ()=>{
    let newText = text1.toUpperCase()
    setText1(newText)
  }
  const lowercase = ()=>{
    let newText = text1.toLowerCase()
    setText1(newText)
  }
  const copy = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const removespaces = ()=>{
    let newText = text1.split(/[ ]+/);
    setText1(newText.join(" "))
  }
  const cleartext = ()=>{
    let newText = " "
    setText1(newText)
  }
  const handleonchange = (e) =>{
    console.log("handle onchange")
    setText1(e.target.value)
  }
  const [text1, setText1] = useState('');
  // setText1('New Text');
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="input-group mb-3">
  <span className="input-group-text">{props.text}</span>
  <textarea className="form-control" id='myBox' onChange={handleonchange} aria-label="With textarea" value={text1}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={Uppercase}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={lowercase}>Convert to lowercasw</button>
<button className="btn btn-primary mx-2" onClick={copy}>copy text</button>
<button className="btn btn-primary mx-2" onClick={removespaces}>Remove Spaces</button>
<button className="btn btn-primary mx-2" onClick={cleartext}>Clear Text</button>
    </div>
    <div className="container my-3">
     <h2>Your text Summary</h2>
     <p>{text1.split(" ").length} words {text1.length} characters</p>
     <p>{0.008*text1.split(" ").length} minuts to read this</p>
     <h2>Preview</h2>
    <p>{text1}</p>
    </div>
    </>
  )
}

Textforms.propTypes={
    text: PropTypes.string

}

Textforms.defaultProps = {
    text: "Enter text here"
}