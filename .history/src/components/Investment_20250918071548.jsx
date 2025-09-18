import React from "react";
import secondPhone from "../assets/images/second-Phone.png";
import "../styles/investment.css";
import { FaArrowRight } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const Investment = () => {
  return (
    <section className="investmentBox">
      <div className="image-container">
        <img src={secondPhone} alt="secondPhone" />
      </div>
      <div className="investment-container">
        <h1>Investment</h1>
        <p>
          Invest like professionals in government bonds from 1000 CFA francs and
          earn up to 6.5% annual interest. The capital is guaranteed by the Bank
          of Central African States (BEAC).
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
export default Investment;
