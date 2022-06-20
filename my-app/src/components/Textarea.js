import { useState } from "react";
import React from "react";



export default function Textarea(props) {
  const [text, setText] = useState(" ");

  const changeToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const changeToLower = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("changing state")
    setText(event.target.value) //updating our text when we are writing on it.
  }
  return (
    <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>{props.head}</h2>
      <div className="mb-3" >
        <label htmlFor="exampleFormControlTextarea1" className="form-label"> Example textarea </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{ backgroundcolour: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        <button className="btn btn-primary" onClick={changeToUpper} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={changeToLower}>Convert to lowercase</button>
      </div>
      <div className="container my-4">
        <h2>You Text Summary</h2>
        <p>There are {text.split(" ").length} words and {text.length} characters in your text</p>
      </div>
       <div className="container my-4">
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>
        </div>
    </div>
      );
}
