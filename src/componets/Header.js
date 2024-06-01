import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import About from "./About";
import Home from "./Home";

const Header = () => {
  return (
    <>
      <div className=" container">
        <div className=" div-h1">
          <h1 className="logo">myFolio</h1>
        </div>

        <div className="div-a">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
