import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from 'react';


const Work = () => {
  return (
    <div calssName="wrok-container" >
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    frontend={val.frontend}
                    live={val.live}
                    backend={val.backend}
                    />
                )
            })}
        </div>  
    </div>
  )
}

export default Work
