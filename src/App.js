import React from "react";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Projects from "./routes/Projects.js";
import { Route, Routes } from "react-router-dom";



function App() {
    return (
      <>
      <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/About" element={<About />}  />
      <Route path="/Contact" element={<Contact/>}  />
      <Route path="/Projects" element={<Projects />}  />
      </Routes>
      </>
    )
       
 
        
  }
  


export default App;
