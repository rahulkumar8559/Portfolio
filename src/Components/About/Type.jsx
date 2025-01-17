import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["React Web Developer" , "Frontend Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
      
    </>
  );
};