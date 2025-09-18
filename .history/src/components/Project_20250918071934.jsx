import React from "react";
import secondPhone from "../assets/images/savings-phone.png";
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
        <h1>Project savings</h1>
        <p>
          Make your dreams come true with Goal Savings. Whether you're planning
          for the next school year or a travel project, we're here to help.
          Download the app now to create a goal.
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
