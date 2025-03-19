import "./HeroImg.css";
import React from 'react'
// import { render } from "@testing-library/react";
import IntroImg from "../assets/logo-og.png";
import {Link} from "react-router-dom";
const HeroImg = () => {
    // render()
    
        return (
            <div className="hero">
                <div className="mask">
                    <img className="intro-img" src={IntroImg} alt= "IntroImg"/>
                </div>
                <div className="content">
                    <p>
                        Hi, My name is Utkarsh Choudhary.
                    </p>
                    <h1>
                        I was a Computer Science Student at Penn State.

                    </h1>
                    <h1> 
            This site was just for a school project and is not maintained. For the currently maintained site, please visit 
            <a href="https://ucportfolioiitb.netlify.app/">my new site: "https://ucportfolioiitb.netlify.app/"
            </a>
            </h1>
                    <div className="btncont">
                        <Link to ="/Projects" className="btn">Projects</Link>
                        <Link to ="/Contact" className="btn btn-light">Contact</Link>
                    </div>
                </div>
            </div>
          )

    
  
}

export default HeroImg
