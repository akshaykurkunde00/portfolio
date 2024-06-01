import React, { useEffect, useRef } from "react";
import "./css/Home.css";
import pic1 from "../assets/pic1.jpg";
import Header from "./Header";

import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { FaStar } from "react-icons/fa"; // Example icon from react-icons
import { GiNightSleep } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

import {
  FaCode,
  FaBed,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { IoExtensionPuzzleSharp } from "react-icons/io5";

function Home() {
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="profile-home">
          <div className="image-cont">
            <img className="profile-image" alt="Avatar" src={pic1}></img>
          </div>

          <div className="des-container">
            <h1>I`m Akshay Kurkunde</h1>

            <h4>
              MERN Devloper
              <a
                className="two"
                href="https://drive.google.com/file/d/1BviZneg4Av77QK5o--laexAUhvAhfAbi/view?usp=drive_link"
              >
                <button>Resume</button>
              </a>{" "}
            </h4>
          </div>

          <div className="social-icons">
            <a
              href="https://github.com/akshaykurkunde00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/akshaykurkunde00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/akshaykurkunde00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/akshaykurkunde00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/akshaykurkunde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="puzzle">
          <IoFastFood className="one1" />
          <FaCode className="two2" />
          <GiNightSleep className="four" />
        </div>
      </div>
    </>
  );
}

export default Home;
