import "./FooterStyle.css";
import React from 'react'
import {FaGithub, FaHome, FaLinkedin, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
          
                   <FaHome size={20} style={{color: "#fff",marginRight: "2rem" }} />
                   <div>
                    <p>2/728, VOC Nagar</p>
                    <p>Namakkal</p>
                   </div>
                </div>
                <div className="phone">
                  <h4> <FaPhone size={20} style={{color: "#fff",marginRight: "1rem" }} />
                    9994228311</h4>
                </div>
            </div>
            <div className="right">
            
               <div className="social">
               <FaLinkedin size={30} style={{color: "#fff",marginRight: "1rem" }} />
               <FaGithub size={30} style={{color: "#fff",marginRight: "1rem"  }} />
               </div>
               </div>
        </div>
      
    </div>
  )
}

export default Footer
