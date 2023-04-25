import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
// import { render } from "@testing-library/react";

const Footer = () => {
  // render()

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Pennsylvania State University, University Park</p>
              <p>University Park, PA 16802.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              ufc5009@psu.edu
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              +1(484)-797-8693
            </h4>
          </div>
          <div className="GitHub">
            <h4>
              <DiGithubBadge
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              github.com/UDogg
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hi, My Name is Utkarsh(UC) Choudhary and this is my 
            <a href="https://ipfs.io/ipfs/QmbwGMYrckUzTwcP8bTxRMrLqxqaUATPs7xUqsAWacFEUM?filename=CV_Utkarsh%20Choudhary.pdf"> Resumé!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
