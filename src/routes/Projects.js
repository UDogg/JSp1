import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import Work from "../components/Work.js";

const Projects = () => {
  render()
  {
    return (
      <div>
        <Navbar />
        <HeroImg2 heading="PROJECTS." text="Some of my recent work." />
        <Work/>
        <Footer />
      </div>
    )
  }
  }
  

export default Projects