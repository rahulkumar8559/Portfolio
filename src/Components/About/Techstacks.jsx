import React from "react";
import { BsBootstrap } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
    SiHtml5,
    SiJavascript,
    SiRedux
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import "./Techstacks.css";

export const Techstacks = () => {
    return (
        <>
        
            <div className="section main" data-aos="fade-right">
                <h2 className="section__title different">TECH STACKS</h2>
                <div className="techsection">

                    <div>
                        <SiHtml5 />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <DiCss3 />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <SiJavascript />
                        <h5>Javascript</h5>
                    </div>
                    <div>
                        <FaReact />
                        <h5>React</h5>
                    </div>
                    <div>
                        <SiRedux />
                        <h5>Redux</h5>
                    </div>
                    
                    <div>
                        <VscGithub />
                        <h5>Github</h5>
                    </div>
                    <div>
                        <BsBootstrap />
                        <h5>Bootstrap</h5>
                    </div>
                    
                   
                    

                    

                </div>
            </div>
            
        </>
    );
};