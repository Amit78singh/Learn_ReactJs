import React, { useState } from 'react'

export default function Textform() {
  const [text, setText] = useState('Enter your Text');

  // 🔼 Convert to Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // 🔽 Convert to Lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // ✂️ Remove extra spaces
  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
  };

  // 📋 Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  // 🧹 Clear text
  const handleClear = () => {
    setText("");
  };

  // 🖊️ Input change handler
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // 🧮 Text statistics
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readTime = (wordCount * 0.008).toFixed(2); // approx 125 words per min

  return (
    <div className="container my-3">
      <h1>Enter your text below</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      {/* Buttons */}
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
        Copy to Clipboard
      </button>
      <button className="btn btn-danger mx-2 my-1" onClick={handleClear}>
        Clear Text
      </button>

      {/* Text Summary */}
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{wordCount} words and {charCount} characters</p>
        <p>Estimated reading time: {readTime} minutes</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </div>
  );
}
