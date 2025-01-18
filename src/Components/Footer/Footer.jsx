import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Footer.css";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              Made with{" "}
              <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
              By Rahul
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
