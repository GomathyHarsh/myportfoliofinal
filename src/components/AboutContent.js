import "./AboutContentStyle.css"

import React from 'react';
import { Link } from "react-router-dom";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>
            As a dedicated professional who recently transitioned from the
     banking industry to pursue a career in IT, I bring a unique blend of skills and perspectives to the
      field of full stack development. With a solid foundation in finance and a 
      strong passion for technology, I am excited to leverage my prior experience to contribute to innovative solutions in the IT industry.
      Motivated by my interest in technology and its transformative potential, I made a deliberate career transition to become a full stack developer. I have invested significant time and effort in self-study and formal training, acquiring a solid understanding of programming fundamentals, web development technologies, 
      and best practices.
            </p>
            <Link to="/contact">
                <button className="btn" >Contact</button>
            </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
                <img src={about2} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={about1} className="img" alt="true"/>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default AboutContent
