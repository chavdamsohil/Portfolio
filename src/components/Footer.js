import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://mail.google.com">
          <Email />
        </a>
        <a
          href="http://www.linkedin.com/in/
sohil-chawada-a12566268
"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p> Thnak you for coming,Have a nice day !</p>
    </div>
  );
}

export default Footer;
