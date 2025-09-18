import React from "react";
import secondPhone from "../assets/images/second-Phone.png";
import "../styles/savings.css";
import { FaArrowRight } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Saving = () => {
  return (
    <section className="savingsBox">
      <div className="image-container">
        <img src={secondPhone} alt="secondPhone" />
      </div>
      <div className="savings-container">
        <h1>savings box</h1>
        <p>
          Easy to spend on emergencies while benefiting from an annual interest
          rate of 2%. It is backed by government obligations, it ensures
          security, flexibility and easy access to your funds. Download the app
          to start saving.
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
export default Saving;
