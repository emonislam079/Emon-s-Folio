import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div className="project-container">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className="home-text">
              <Grid
                item
                xs={12}
                md={12}
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                
                <h1 data-aos="fade-down" data-aos-duration="2000">
                  Hi, I am
                </h1>
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  style={{ color: "DeepSkyBlue" }}
                >
                  Emon Islam
                </h1>
                <h2>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Front-End Web Developer",
                      2000,
                      "Mern Stack Web Developer",
                      2000,
                      "React Developer",
                      2000,
                    ]}
                  />
                </h2>
                <div
                  className="cta"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a id="home-link"
                    href="https://drive.google.com/file/d/16b3aLtngFmoItICc_sWlT038AASUWLex/view?usp=sharing"
                    target="_blank">Download Resume</a>
                </div>
                <div
                  className="profile-icon"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <a href="https://github.com/emonislam079" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare}> </FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-emon-i-440842a4/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Home;
