import "./Navbar.css";
import React from 'react'
import {Link} from "react-router-dom";
import { render } from "@testing-library/react";
import {FaBars , FaTimes} from "react-icons/fa";
import { useState } from "react";

const Navbar  = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100)
        {
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
    render()
    {
        return (
            <div className={color?("header header-bg"):("header")}>
                <Link to ="/">
                    <h1>Portfolio</h1>
                </Link>
                <ul className= {click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/About">About</Link>
                    </li>
                    <li>
                        <Link to = "/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to = "/Projects">Projects</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick = {handleClick}>
                    {click ? ( <FaTimes size={20} style={{color:"#fff"  }} />) : (  <FaBars size={20} style={{color:"#fff"  }} />)}                 
                  
                </div>
            </div>
          )
    }
  
}

export default Navbar