
import React from "react";
import pic2 from "../assets/pass.png";
import "./css/About.css";
import Header from "./Header";
import {
  FaHtml5,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

const About = () => {
  return (
    <>
  
      <div className="container-about">
        <div>
          <h1>About me</h1>
        </div>

        <div className="container-image">
          <div className="section1">
            <img src={pic2}></img>
          </div>
          <div className="section2">
            <div>
              <p>
                I am passanate MERN stack Devloper.with professional expertise
                in feild.With a strong background in developing web applications
                using MongoDB, Express.js, React, and Node.js, I have a keen
                interest in building scalable and efficient solutions. My
                experience spans across various industries, and I take pride in
                my ability to translate business requirements into technical
                solutions.
              </p>
            </div>

            <h2>Skills</h2>

            <div className="skills">
              <FaHtml5 className="A" />
              <IoLogoCss3 className="B" />
              <FaReact className="C" />
              <FaNodeJs className="D" />
              <SiMongodb className="E" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
