import './App.css'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About'
import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"


function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <div className="container my-3">
        {/* Toggle buttons */}
        <button 
          className="btn btn-primary mx-2" 
          onClick={() => setShowAbout(false)}
        >
          Home
        </button>
        <button 
          className="btn btn-secondary mx-2" 
          onClick={() => setShowAbout(true)}
        >
          About
        </button>

        {/* Conditional Rendering */}
        {!showAbout ? (
          <Textform heading="Enter the text to analyze below" />
        ) : (
          <About />
        )}
      </div>
    </>
  )
}

export default App
