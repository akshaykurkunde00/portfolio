
import React from "react";
import Header from "./Header";
import logo1 from "../assets/tracker.png";
import logo2 from "../assets/handcricket.png";
import logo3 from "../assets/calculator.png";
import "./css/Projects.css";
const Projects = () => {
  return (
    <>
      
      <div className="project-container">
        <h1> My Projects</h1>
        <div className="code">
          <div className="image-container">
            <img src={logo1}></img>
            <button>ExpenceTracker</button>
          </div>
          <div className="image-container">
            <img src={logo2}></img>
            <button>Hand Cricket</button>
          </div>
          <div className="image-container">
            <img src={logo3}></img>
            <button>Calculator</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
