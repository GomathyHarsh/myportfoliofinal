import "./HeroimageStyle.css";


import React from 'react'
import { Link } from "react-router-dom";
import IntroImg from "../assets/bg1.jpg";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
             <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
      <div className="content">
      <div className='profile-picture'>
            <div className='profile-picture-background'>
               
            </div>
            </div>

        <p>HI, I'M Gomathy</p>
        <h3> 
          Full Stack Developer</h3>
        <div>
           {/* <Link to="/project" className="btn">Projects</Link> */}
            <a href='https://drive.google.com/file/d/1J6jq3E9JKCbVv9XO44Ghx8_4_feTMWAO/view?usp=drivesdk' target="_blank">
                <button className='btn'>Get Resume</button>
            </a>
            <Link to="/contact" className="btn-light">Hire Me</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Heroimage
