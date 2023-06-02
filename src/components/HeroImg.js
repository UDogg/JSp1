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
                        Hi, My name is UC Choudhary.
                    </p>
                    <h1>
                        I am a Computer Science Student at Penn State.

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
