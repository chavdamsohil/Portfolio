import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import js from "../components/images/js.png";
import css from "../components/images/css.png";
import html from "../components/images/html.png";
import react from "../components/images/react.png";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="name">
          Hi,My Name is <span>Sohil</span>
        </h2>
        <div className="prompt">
          <p>
            A Front-end web developer with passion for learning and creating
          </p>
          <LinkedInIcon></LinkedInIcon>
          <EmailIcon></EmailIcon>
          <GithubIcon></GithubIcon>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>

        <div className="item">
          <h3>Front-end</h3>

          <div className="skillslogos">
            <img
              className="sLogo"
              src={html}
              alt="js"
              width="140"
              height="140"
            ></img>
            <img
              className="sLogo"
              src={css}
              alt="js"
              width="140"
              height="140"
            ></img>
            <img
              className="sLogo"
              src={js}
              alt="js"
              width="140"
              height="140"
            ></img>
            <img
              className="sLogo"
              src={react}
              alt="js"
              width="140"
              height="140"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
