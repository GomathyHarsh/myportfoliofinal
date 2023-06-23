import "./FooterStyle.css";
import React from 'react'
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                   
                   <h4><FaHome size={20} style={{color: "#fff",marginRight: "2rem" }} />
                   
                    <p>2/728, VOC Nagar</p>
                    <p>Namakkal</p></h4>
                  
                </div>
                <div className="phone">
                  <h4> <FaPhone size={20} style={{color: "#fff",marginRight: "1rem" }} />
                    9994228311</h4>
                </div>
                <div className="mail">
                <h4><FaMailBulk size={20} style={{color: "#fff",marginRight: "1rem" }} />gomathy2511@gmail.com</h4>
                </div>
            </div>
            <div className="right">
            
               <div className="social">
               <a href="https://www.linkedin.com/in/gomathy-m-60b595266/" target="_blank" rel="noopener noreferrer">
               <FaLinkedin size={30} style={{color: "#fff",marginRight: "1rem" }} /> 
               </a>
               
               <a href="https://github.com/GomathyHarsh" target="_blank" rel="noopener noreferrer">
               <FaGithub size={30} style={{color: "#fff",marginRight: "1rem" }} /> 
               </a>

               </div>
               </div>
        </div>
      
    </div>
  )
}

export default Footer
