import React from 'react'
import { render } from "@testing-library/react";
import WorkCard from "./WorkCard.js";
import WorkCardData from "./WorkCardData.js"

const Work = () => {
    render()
    {
        return (
            <div className="work-container">
                <h1 className="project-heading">
                    Projects
                    <div className="project-container">
                        {WorkCardData.map((val, ind)=>{
                            return(
                                <WorkCard 
                                key = {ind}
                                imgsrc={val.imgsrc}
                                title = {val.title}
                                text = {val.text}
                                view = {val.view}
                                source = {val.source}/>
                            )
                        })}
                    </div>
                </h1>
            </div>
          )

    }
  
}

export default Work