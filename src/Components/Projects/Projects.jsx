import React from "react";
import { DiCss3 } from "react-icons/di";
import { SiHtml5, SiJavascript } from "react-icons/si";
import "./Projects.css";

// import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div
            className="projects_container project-card"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="/culturalatlas.jpg"
                    alt="Cultural Atlas"
                  />
                </div>
              </div>
              <div className="project_information project-description">
                <h2 className="project-title">Cultural Atlas</h2>
                <p>
                The Cultural Atlas is an educational resource providing comprehensive information on the cultural background of All Country migrant populations. The aim is to improve social cohesion and promote inclusion in an increasingly culturally diverse society.
                </p>
                <div className="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    className="project-deployed-link"
                    href="*" //add krna hai//
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    className="project-github-link"
                    href="https://github.com/rahulkumar8559/Cultural"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="projects_container project-card"
            data-aos="fade-right"
          >
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="/food.jpg"
                    alt="food-delivery"
                  />
                </div>
              </div>
              <div className="project_information project-description">
                <h2 className="project-title">Food Delivery</h2>
                <p>
                  trivago is a hotel search with an extensive price comparison.
                  The prices shown come from numerous hotels and booking
                  websites.
                </p>
                <div className="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    className="project-deployed-link"
                    href="https://rahulkumar8559.github.io/food/" // add krna hai//
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Go Live
                    </span>
                  </a>
                  <a
                    className="project-github-link"
                    href="https://github.com/rahulkumar8559/food"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </>
  );
};
