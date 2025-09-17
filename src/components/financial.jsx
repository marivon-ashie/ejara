import React from "react"
import "../styles/Financial.css"
import googlePlayStore from "../assets/google-play-store.png";
import appStore from "../assets/appStore.png";

const Financial = () => {
  return (
    <div className="">
      <h2>your financial companion</h2>
      <p>
        Where Every Transaction Counts: Investing, Saving and Paying with Ejara
      </p>
      <div>
        <img src={googlePlayStore} alt="googlePlayStore" />{" "}
        <img src={appStore} alt="appStore" />
      </div>
    </div>
  );
};

export default Financial;
