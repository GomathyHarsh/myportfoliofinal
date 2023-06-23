import "./WorkCardStyle.css";

import React from 'react';



const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="img"/>
    <h2 className="project-tittle">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        <a href={props.view} target="_blank" rel="noreferrer" className="btn" >View</a>
     
      
        
      </div>
    </div>
</div>
  )
}

export default WorkCard
