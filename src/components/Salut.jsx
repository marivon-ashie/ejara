import React from "react";
import phoneApp from "../assets/images/phone-App.png";
import line from "../assets/images/line.png";
import "../styles/Salut.css";

const Salut = () => {
  return (
    <section className="salut">
      <div className="phone">
        <img src={phoneApp} alt="phoneApp " />
      </div>
      <div className="image-container">
        <img src={line} alt="line" />
      </div>
    </section>
  );
};
export default Salut;
