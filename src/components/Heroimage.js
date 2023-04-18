import "./HeroimageStyle.css";
import Typical from 'react-typical'

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
        <h1> <Typical
                   loop={Infinity}
                   steps={[
                    "Full Stack Developer ",
                    1000,
                    "MERN Stack Developer",
                    1000
                   ]}
                   /></h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Heroimage
