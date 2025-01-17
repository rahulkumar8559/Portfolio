import EmailIcon from "@material-ui/icons/Email";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import resume from "../../assets/himanshuresume.pdf";
import "./About.css";
import { Introduction } from "./Introduction";
import Skills from "./Skills";
import { Techstacks } from "./Techstacks";
import { Type } from "./Type";


export const About = () => {
  return (
    <>
      <div id="about" className="about center section">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am{" "}
          <span id="user-detail-name" className="about__name">
            Rahul Kumar
          </span>
        </h1>
        <Type />
        <p id="user-detail-intro" className="about__desc" data-aos="fade-right">
        Aspiring Frontend React Developer - <span style={{color:"gray"}}> Team player with leadership qualities and a quick learner, passionate about building dynamic and user-friendly interfaces. Proficient in React, JavaScript, HTML, and CSS, with hands-on experience in modern frontend development practices. Enthusiastic about working in a product-based company and eager to explore and master new tools and technologies to deliver high-quality solutions.</span>
        </p>
        <div id="contact" className="about__contact center ">
          <a
            id="contact-github"
            href="https://github.com/rahulkumar8559"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            id="contact-email"
            href="mailto:rk681253@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            id="contact-phone"
            href="tel:+91-7011118559"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://x.com/home" //twitter dalna h
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>
        <a href={resume} download>
          <button id="resume-link-2" className="btnResume"> {/*resume dalna hai*/}
            Resume <GetAppIcon className="resume-dwnld" />
          </button>
        </a>
      </div>
      <Introduction />

      <section id="techstack">
        <Techstacks />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </>
  );
};
