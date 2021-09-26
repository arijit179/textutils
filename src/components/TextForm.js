import React, { useState } from "react";


export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" , "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase" , "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared" , "success");
    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard" , "success");
    }
    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed" , "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style = {{color : props.mode === 'blue'?'white':'black'}}>
                <h3 className = "my-3">{props.heading}</h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'blue'?'#434040':'white' , color : props.mode === 'blue'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button type="submit" className="btn btn-primary" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button type="submit" className="btn btn-primary" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className="container" style = {{color : props.mode === 'blue'?'white':'black'}}>
                <h2 className = "my-3">Your text summary</h2>
                <p className = "my-3">{text.split(' ').filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
                <p className = "my-3">{0.008 *text.split(' ').length} Minutes to read</p>
                <h3 className = "my-3">Preview</h3>
                <p className = "my-3">{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
