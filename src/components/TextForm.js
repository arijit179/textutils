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
        document.getSelection().removeAllRanges();
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
                <h3 className = "mb-3">{props.heading}</h3>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'blue'?'rgb(29 52 86)':'white' , color : props.mode === 'blue'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled = {text.length===0} type="submit" className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled = {text.length===0} type="submit" className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled = {text.length===0} type="submit" className="btn btn-primary" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button disabled = {text.length===0}type="submit" className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button disabled = {text.length===0} type="submit" className="btn btn-primary" onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className="container" style = {{color : props.mode === 'blue'?'white':'black'}}>
                <h2 className = "my-3">Your text summary</h2>
                <p className = "my-3">{text.split(' ').filter((elem)=>{return elem.length!==0}).length} words and {text.length} characters</p>
                <p className = "my-3">{0.008 * text.split(' ').filter((elem)=>{return elem.length!==0}).length} Minutes to read</p>
                <h3 className = "my-3">Preview</h3>
                <p className = "my-3">{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    );
}
