import { useState } from "react";
import React from "react";



export default function Textarea(props) {
  const [text, setText] = useState(" ");

  const changeToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
   
  }
  const changeToLower = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
    
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space is Removed!", "success");
}
const handleCopy = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text Copied!", "success");

}
const handleClear = () => {
  setText("")
  props.showAlert("Text is Cleared", "success");
 
}

  const handleOnChange = (event) => {
    console.log("changing state")
    setText(event.target.value) //updating our text when we are writing on it.
  }

  return (
    <div >
      
      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"> Example textarea </label>

        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#20262d': 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      
        <button className="btn btn-primary my-2" onClick={changeToUpper} >Convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={changeToLower}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>You Text Summary</h2>
        <p>There are {text.split(" ").length} words and {text.length} characters in your text</p>
      </div>
       <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
        </div>
    </div>
      );
}
