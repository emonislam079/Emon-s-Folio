import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="project-container project-portion"
      style={{ paddingBottom: "25px" }}
    >
      <Container style={{ margin: "auto" }}>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <h3
            style={{ textAlign: "center", fontSize: "4rem", padding: "30px" }}
          >
            Personal
            <span style={{ color: "DeepSkyBlue" }}> Projects</span>
          </h3>
        </div>
        <div style={{ margin: "auto" }}>
          {projects.map((project) => (
            <Project key={project.name} project={project}></Project>
          ))}
        </div>
      </Container>
      <Container style={{ margin: "auto" }}>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <h3
            style={{ textAlign: "center", fontSize: "4rem", padding: "30px" }}
          >
            Group
            <span style={{ color: "DeepSkyBlue" }}> Projects</span>
          </h3>
        </div>
        <div style={{ margin: "auto" }}>
        <Grid
        style={{ width: "95%", margin: "20px auto", paddingRight: "25px" }}
        container
        spacing={2}
        className="project-box"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
      <Grid item xs={12} md={6}>
          <Grid container spacing={2} className="project-photo">
            <Grid item xs={12} md={12}>
              <img style={{ width: "100%" }} src="https://i.ibb.co/7STDbdQ/Screenshot-281.png" alt=""  data-aos="zoom-out"
        data-aos-duration="2000"/>
            </Grid>
            <Grid item xs={6} md={6}>
              <img style={{ width: "100%" }} src="https://i.ibb.co/59Cq2ct/Screenshot-282.png" alt="" data-aos="zoom-out"
        data-aos-duration="2000" />
            </Grid>
            <Grid item xs={6} md={6}>
              <img style={{ width: "100%" }} src="https://i.ibb.co/RQzJ48F/Screenshot-283.png" alt="" data-aos="zoom-out"
        data-aos-duration="2000" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="project-details ">
            <h1>EduCare</h1>
            <ul>
              <li>Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for Teacher, student and admin</li>
              <li>We have built a responsive school website which can be used to manage all school activities</li>
              <li>Home page showcases carousel which includes three slides showing the schools mission, all teachers profile, reviews from external users and subscription emailing section</li>
              <li>Sign in is required to request to view dashboard with. Note: Only admin user have ability to view admin dashboard.</li>
             
            </ul>
            <h5>Used Technology: React JS, Firebase, React Router, React Hook Form, Redux, API, React Bootstrap, FontAwesome, Node JS, Express JS, Mongodb, Heroku.</h5>
             <div className="project-link">
                <a href="https://edu-care-a8e28.web.app/" target="_blank">
                  Live Site
                </a>
                <a href="https://github.com/krishnacheashty/EduCare/tree/main" target="_blank">
                  Github Client
                </a>
                <a href="https://github.com/krishnacheashty/edu-care-server" target="_blank">
                  Github Server
                </a>
              </div>            
          </div>
        </Grid>
      </Grid>
        </div>
      </Container>

    </div>
  );
};

export default Projects;
