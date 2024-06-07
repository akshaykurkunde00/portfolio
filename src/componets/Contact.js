
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import "./css/Contact.css";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_czl46xt", "template_5oqtaku", form.current, {
        publicKey: "Xu0ZJa8DkQzDvOw8G",
      })
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you for contacting!", {
            position: "bottom-right",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message, please try again.", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      );
  };

  return (
    <>
     
      <div className="container-contact">
        <h1>Get in Touch with me</h1>

        <div className="section">
          <div className="sec1">
            <h2>Lets talk</h2>
            <p>
              im currently available to take on new Projects, so feel free to
              send me a message about anything that you want me to work on . you
              can contact anytime{" "}
            </p>

            <h4>Email: akshaykurkunde00@gmail.com</h4>
            <h4>Phone: +91 8605045406</h4>
            <h4>Location: India,Nashik.</h4>
          </div>
          <div className="sec2">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" />

              <input type="email" name="user_email" placeholder="Your Email" />

              <textarea
                name="message"
                placeholder="Write your message here......."
              />
              <input type="submit" className="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
