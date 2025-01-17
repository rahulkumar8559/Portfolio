import React from "react";
import { ThemeContext } from "../../Context/theme";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header  className={"header center " + themename}>
        {/* style={{backgroundColor: "white",  position:"fixed", margin:"auto"}} */}
        <h3>
          <a href="#home" className="link">
            <span></span>
            Rahul
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
