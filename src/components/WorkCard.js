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
        <a href={props.frontend} target="_blank" rel="noreferrer" className="btn" >Frontend</a>
        <a href={props.live} target="_blank" rel="noreferrer" className="btn" >Live</a>
        <a href={props.backend} target="_blank" rel="noreferrer" className="btn" >Backend</a>
      </div>
    </div>
</div>
  )
}

export default WorkCard
