import "./Form.css";
import React from 'react'
// import { render } from "@testing-library/react";

const Form = () => {
    // render()
    
        return (
            <div className="Form">
                <h1>This is a mock contact page like Big-Tech companies.</h1>
                <form>
                    <label>Your Name</label>
                    <input type="text"></input>
                    <label>E-Mail</label>
                    <input type="email"></input>
                    <label>Subject</label>
                    <input type="text"></input>
                    <label>Message</label>
                    <textarea rows="6" placeholder ="Type Your Message Here"/>
                    <button className="btn">Submit</button>
                </form>
        
            </div>
          )

    

}

export default Form
