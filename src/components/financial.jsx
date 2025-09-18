import React from "react";
import "../styles/Financial.css";
import googlePlayStore from "../assets/images/google-play-store.png";
import appStore from "../assets/images/appStore.png";

const Financial = () => {
  return ( 
    <section className="financial">
      <div className="financial-container">
        <h2>Your financial companion</h2>
        <p>
          Where Every Transaction Counts: Investing, Saving and Paying with
          Ejara
        </p>
        <div className="image-container">
          <img src={googlePlayStore} alt="googlePlayStore" />{" "}
          <img src={appStore} alt="appStore" />
        </div>
      </div>
    </section>
  );
};

export default Financial;
