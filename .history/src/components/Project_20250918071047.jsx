import React from "react";
import secondPhone from "../assets/images/second-Phone.png";
import "../styles/project.css";
import { FaArrowRight } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Project = () => {
  return (
    <section className="projectBox">
      <div className="image-container">
        <img src={secondPhone} alt="secondPhone" />
      </div>
      <div className="project-container">
        <h1>project box</h1>
        <p>
          Easily save for emergencies while earning a 2% annual interest rate.
          Backed by government bonds, it guarantees security, flexibility, and
          easy access to your funds. Download the app to start saving.
        </p>
        {/* <div className="arrow"> */}
        <a href="#">
          <BiArrowBack className="arrow" size={30} color="#000" />
        </a>
        {/* <FaArrowRight size={30} color="#000" /> */}
        {/* </div> */}
      </div>
    </section>
  );
};
export default Project;
