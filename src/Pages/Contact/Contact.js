import React, { useEffect, useRef } from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/material";
import "./Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";

// use emailjs for dynamic contact form
import emailjs from "emailjs-com";

// use FontAwesome for icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
  useEffect(() => {
    AOS.init();
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_gz0gytk",
        form.current,
        "user_YG9y79P4Sw0fNzc3YmBZs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-container">
      <Container data-aos="fade-up" data-aos-duration="2000">
        <div>
          <h1 style={{ fontSize: "3rem", paddingTop: "20px" }}>CONTACT ME</h1>
          <hr />
          <br />
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>PHONE NUMBER</label>
                <input type="number" name="user_contact" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>SUBJECT</label>
                <input type="text" name="subject" />
                <label>MESSAGE</label>
                <textarea name="message" />
                <input
                  style={{ color: "black", fontWeight: "600" }}
                  type="submit"
                  value="Send"
                  className="contact-submit"
                />
              </form>
            </Grid>
            <Grid item xs={12} md={6} className="contact-info">
              <div className=" bg-dark contact-div">
                <div>
                  <p style={{ fontSize: "4rem" }}>
                    <FontAwesomeIcon icon={faPhoneSquareAlt}> </FontAwesomeIcon>
                  </p>
                </div>
                <div>
                  <h6>Phone</h6>
                  <p>+8801949400955</p>
                  
                </div>
              </div>
              <div className=" bg-dark contact-div">
                <div>
                  <p style={{ fontSize: "4rem" }}>
                    <FontAwesomeIcon icon={faEnvelopeSquare}> </FontAwesomeIcon>
                  </p>
                </div>
                <div className="contact-portion-div">
                  <h6>Email</h6>
                  <p>emonislam079@gmail.com</p>
                  
                </div>
              </div>
              <div className=" bg-dark contact-div">
                <div>
                  <p style={{ fontSize: "4rem" }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}> </FontAwesomeIcon>
                  </p>
                </div>
                <div>
                  <h6>Address</h6>
                  <p>Saddam Market, Matuail, Kadamtali</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div></div>
              <div></div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default Contact;
