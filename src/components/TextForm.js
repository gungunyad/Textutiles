import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked" + text );
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPER CASE" );
  }
  const handleLoClick = ()=>{
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to lower case");
   }
 

  const handleOnChange = (event)=>{
   //console.log("On change");
    setText(event.target.value);
  }


  const handleCopy = () => {
    // console.log("I am copy");
     var text = document.getElementById("myBox")
     text.select();
    // text.setSelectionRange(0,99999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copy Text");
  }

  const [text, setText] = useState(' ');

 
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundcolor:props.mode ==='dark'?'grey':'white' }} id="myBox" rows="8"></textarea>
        </div>  
        <button className="btn btn success mx-2" onClick={handleUpClick}>Convert to UPPER CASE</button>
        <button className="btn btn success mx-2" onClick={handleLoClick}>Convert to lower case</button>
        {/*<button className="btn btn success mx-2" onClick={handleClearClick}>Clear Text</button>*/}
        <button className="btn btn success mx-2" onClick={handleCopy}>Copy Text</button>
        {/*<button className="btn btn success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>*/}
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here...!!"}</p>
    </div>
    </>
  )
}
