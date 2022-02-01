import React, { useEffect } from "react";

// use AOS for animation on scrolling
import AOS from "aos";
import "aos/dist/aos.css";

// use FontAwesome for icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCode } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

const Service = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div style={{ marginBottom: "50px" }}>
      <div>
        <h1 style={{ marginTop: "50px", fontSize: "3rem" }}>SERVICES</h1>
        <hr style={{ marginBottom: "50px" }} />
      </div>
      <div class="row">
        <div class="col-sm-6" style={{ marginBottom: "20px" }}>
          <div
            class="card bg-dark service-card"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          >
            <div class="card-body">
              <p className=" text-danger bg-dark" style={{ fontSize: "80px" }}>
                <FontAwesomeIcon icon={faPaintBrush}> </FontAwesomeIcon>
              </p>
              <h5
                class="card-title  fs-2"
                style={{ marginBottom: "20px", color: "aquamarine" }}
              >
                Web Design
              </h5>
              <p class="card-text text-white">
                My name is Emon Islam and I am a full-time freelance web
                designer who specializes in creating dynamic and beautiful web
                pages. I have been in the field for almost 1 year, and have been
                loving every minute of it. I am a entrepreneur, designer,
                developer, and overall thinker.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div
            class="card bg-dark service-card"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
            <div class="card-body">
              <p className=" text-danger bg-dark" style={{ fontSize: "80px" }}>
                <FontAwesomeIcon icon={faCode}> </FontAwesomeIcon>
              </p>
              <h5
                class="card-title fs-2"
                style={{ marginBottom: "20px", color: "aquamarine" }}
              >
                Web Development
              </h5>
              <p class="card-text text-white">
                As a Front-End Developer I created a lot of different websites
                for our clients using React.js, HTML, CSS and JavaScript to
                built the sites. I helped to improve the developer experience of
                the company by implementing tools to improve our software
                development process.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
