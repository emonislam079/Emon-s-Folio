import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import "./Project.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
  useEffect(() => {
    AOS.init();
  });
  const {
    name,
    description1,
    description2,
    description3,
    description4,
    description5,
    usedTechnology,
    img1,
    img2,
    img3,
    liveUrl,
    clientSide,
    serverSide,
  } = props.project;
  return (
    <div>
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
              <img style={{ width: "100%" }} src={img1} alt=""  data-aos="zoom-out"
        data-aos-duration="2000"/>
            </Grid>
            <Grid item xs={6} md={6}>
              <img style={{ width: "100%" }} src={img2} alt="" data-aos="zoom-out"
        data-aos-duration="2000" />
            </Grid>
            <Grid item xs={6} md={6}>
              <img style={{ width: "100%" }} src={img3} alt="" data-aos="zoom-out"
        data-aos-duration="2000" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="project-details ">
            <h1>{name}</h1>
            <ul>
              <li>{description1}</li>
              <li>{description2}</li>
              <li>{description3}</li>
              <li>{description4}</li>
              <li>{description5}</li>
            </ul>
            <h5>Used Technology: {usedTechnology}</h5>
            
            {serverSide ? (
              <div className="project-link">
                <a href={liveUrl} target="_blank">
                  Live Site
                </a>
                <a href={clientSide} target="_blank">
                  Github Client
                </a>
                <a href={serverSide} target="_blank">
                  Github Server
                </a>
              </div>
            ) : (
              <div className="project-link">
                <a href={liveUrl} target="_blank">
                  Live Site
                </a>
                <a href={clientSide} target="_blank">
                  Github Client
                </a>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
