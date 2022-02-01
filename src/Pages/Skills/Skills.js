import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    name: "HTML",
    img: "https://i.ibb.co/M53XdL3/1.png",
  },
  {
    name: "CSS",
    img: "https://i.ibb.co/YLKQwNQ/2.png",
  },
  {
    name: "JavaScript",
    img: "https://i.ibb.co/tbHRjz3/3.jpg",
  },
  {
    name: "ReactJS",
    img: "https://i.ibb.co/cNnTFdj/4.png",
  },
  {
    name: "Bootstrap",
    img: "https://i.ibb.co/dLxjKyj/5.jpg",
  },
  {
    name: "React Bootstrap",
    img: "https://i.ibb.co/6mFB9wt/6.png",
  },
  {
    name: "Material-UI",
    img: "https://i.ibb.co/4K9XpTs/7.png",
  },
  {
    name: "NodeJS",
    img: "https://i.ibb.co/CHtCVy5/8.png",
  },
  {
    name: "MongoDB",
    img: "https://i.ibb.co/9q4Dqfk/9.jpg",
  },
  {
    name: "ExpressJS",
    img: "https://i.ibb.co/nwxVRsv/10.jpg",
  },
  {
    name: "Tailwind CSS",
    img: "https://i.ibb.co/7Xhhgp7/11.jpg",
  }
  
];

const tools = [
  {
    name: "Git",
    img: "https://i.ibb.co/VTPdnxH/12.jpg",
  },
  {
    name: "Netlify",
    img: "https://i.ibb.co/WF4XjHB/13.png",
  },
  {
    name: "Heroku",
    img: "https://i.ibb.co/X77Mwhj/14.jpg",
  },
  {
    name: "Firebase",
    img: "https://i.ibb.co/GfZ9dcF/5f34fd1aa2ebfaf2cd548bafeb021c8f.png",
  },
  {
    name: "VS Code",
    img: "https://i.ibb.co/Sd8xQdG/vscode.png",
  },
  {
    name: "Photoshop",
    img: "https://www.dignited.com/wp-content/uploads/2021/11/Photoshop.png",
  },
  {
    name: "Figma",
    img: "https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png",
  },
];

const Skills = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div className="project-container">
      <Container style={{ margin: "auto" }} className="skills-portion">
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
            paddingTop: "30px",
            fontSize: "50px",
          }}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Professional{" "}
          <span style={{ color: "DeepSkyBlue", textAlign: "center" }}>
            Skillset
          </span>
        </h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6} className="skills-image">
            {images.map((image) => (
              <Grid item xs={6} md={2}>
                <div
                  className="skills-box container-img "
                  style={{ paddingLeft: "0px" }}
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                >
                  <img class="image" src={image.img} alt="" />
                  <p className="title"> {image.name}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <h1
          style={{ textAlign: "center", margin: "50px", fontSize: "50px" }}
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          {" "}
          <span style={{ color: "DeepSkyBlue", textAlign: "center" }}>
            Tools
          </span>{" "}
          I Use{" "}
        </h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6} className="skills-image">
            {tools.map((image) => (
              <Grid item xs={6} md={2.4}>
                <div
                  className="skills-box container-img "
                  style={{ paddingLeft: "0px" }}
                  data-aos="zoom-out"
                  data-aos-duration="1500"
                >
                  <img class="image" src={image.img} alt="" />
                  <p className="title"> {image.name}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Skills;

//
//
//
