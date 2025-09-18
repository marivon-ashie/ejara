import React from "react";
import secondPhone from "../assets/images/second-Phone.png";
import "../styles/savings.css";

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
      </div>
    </section>
  );
};
export default Saving;
