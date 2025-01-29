import React from "react";
import "../Styles/about.css";
import karthikPhoto from "../Images/IMG_7711.JPG"
import Karthik_Acharya_Resume from "../files/Karthik_Acharya_Resume.pdf";

const About = ({ ref, func }) => {
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1FFZIe7ICpA4SrbgSTwvM-2uCE7ovwxcV/view?usp=sharing"
    );
    const link = document.createElement("a");
    link.href = Karthik_Acharya_Resume;
    link.setAttribute("download", "Karthik_Acharya_Resume");
    link.setAttribute("id", "resume-link-2");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about section" id="about" ref={ref} onScroll={func}>
      <h1 className="about-me">
        About <span style={{ color: "#0e4166" }}>Me</span>
      </h1>

      <div className="image-des">
        <div>
          <img className="home-img" src={karthikPhoto} alt="myimage" />
        </div>
        <div>
          <p id="user-detail-intro">
         An innovative full-stack web developer proficient in JavaScript, MongoDB, Express.js, Node.js, and React. Recognized for adaptability and problem-solving in building scalable applications. Skilled in Generative AI, software architecture, and performance optimization, with a passion for mastering new technologies to drive project success.
          </p>
          <div className="resume-button" id="resume-button-2">
            <button className="download-button" onClick={handleDownload}>
              <div className="docs">
                <svg
                  className="css-i6dzq1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line y2="13" x2="8" y1="13" x1="16"></line>
                  <line y2="17" x2="8" y1="17" x1="16"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Resume
              </div>
              <div className="download">
                <svg
                  className="css-i6dzq1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line y2="3" x2="12" y1="15" x1="12"></line>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
