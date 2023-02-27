// import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Form from "../components/Form.js"
import HeroImg2 from "../components/HeroImg2.js";


const Contact = () => {
    // render()
    
        return (
            <div>
                <Navbar />
                <HeroImg2 heading="CONTACT" text="Email me: ufc5009@psu.edu"/>
                <Form />
                <Footer />
            </div>
          )
    
 
}

export default Contact