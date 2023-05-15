import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import js from "../components/images/js.png";
import css from "../components/images/css.png";
import html from "../components/images/html.png";
import react from "../components/images/react.png";
import git from "../components/images/git.png";

import "../styles/Home.css";
import Projects from "./Projects";
import Experience from "./Experience";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2 className="name">
          Hi,My Name is <span>Sohil</span>
        </h2>
        <div className="prompt">
          <p>Front-end web developer</p>
          <a href="tel:9768034407">
            <CallIcon></CallIcon>
          </a>
          <a href="mailto:chavdamsohil@gmail.com">
            <EmailIcon></EmailIcon>
          </a>
          <a href="https://github.com/chavdamsohil">
            <GithubIcon></GithubIcon>
          </a>
        </div>
      </div>
      <div className="skills">
        <div className="item">
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
            <img
              className="sLogo"
              src={git}
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

function Main() {
  return (
    <>
      <Home></Home>
      <Projects></Projects>
      <Experience></Experience>
    </>
  );
}

export default Main;
