import React from "react";
import "./aboutSection.css";
import link from "./Photo.jpeg"
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/piyush_singhs/";
  };
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={link}
              alt="Founder"
            />
            <Typography>Piyush Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              I am Piyush Singh and I made this project to practice upon my web  development skills
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Socials</Typography>
         

            <a href="https://www.instagram.com/piyush_singhs/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
