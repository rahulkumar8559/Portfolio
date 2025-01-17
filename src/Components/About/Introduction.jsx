import React, { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Rahul.png";
import "./Introduction.css";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section id="home">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer home-img">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone 👋 My name is{" "}
                <span className="different">Rahul Kumar </span> from{" "}
                <span className="different"> Faridabad, Haryana (India)</span>.
                I completed my intermediate in july 2021{" "}
                <span className="different">
                  Kurushetra Senior Secondary School, Faridbad (Haryana)
                </span>
                . In June 2022 I Joined{" "}
                <span className="different">DICS COMPUTER EDUCATION</span> a military type
                coding school. I got hand on experience in frontend
                technologies , HTML, CSS, JavaScript.{" "}
                <span className="different">1000+ hours of Coding</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
