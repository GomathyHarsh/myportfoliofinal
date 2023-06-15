import './SkillContentStyle.css';
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import mongodb from "../assets/mongodb.jpg";
import express from "../assets/express.jpg";

import React from 'react'

const SkillContent = () => {
  return (
    <div className='skill-cont'>
        <div className='gallery'>
            <img src={html} alt=""/>
            <img src={css} alt=""/>
            <img src={js} alt=""/>
            <img src={bootstrap} alt=""/>
            <img src={react} alt=""/>
            <img src={node} alt=""/>
            <img src={express} alt=""/>
            <img src={mongodb} alt=""/>
           
        </div>
      
    </div>
  )
}

export default SkillContent
