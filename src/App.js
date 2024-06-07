// src/App.js
import React from "react";
import "./App.css";
import Header from "./componets/Header";
import About from "./componets/About";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">

        
        <Router  basename={process.env.PUBLIC_URL}
        >

          <Header />
          <Routes>
          { <Route path="/"  element={<Navigate to="/home" />}   />}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
