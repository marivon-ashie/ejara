import React from "react";
import secondPhone from "../assets/images/second-Phone.png";

const Saving = () => {
  return (
    <section className="savingsBox">
      {" "}
      <img src={secondPhone} alt="secondPhone" />
      <div className="savings-contianer">
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
