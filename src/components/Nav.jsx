import React from "react";
import "../styles/nav.css";
import logo from "../assets/images/logo.svg";
import { CiGlobe } from "react-icons/ci";

const Nav = () => {
  return ( 
    <div class="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div> 
      <ul>
        <li>
          {" "}
          <a href="">Saving </a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Invest </a>{" "}
        </li>
        <li>
          {" "}
          <a href="p">Ejara of Business </a>{" "}
        </li>
      </ul>
      <div className="continent">
        {" "}
        <CiGlobe /> <p>Africa</p>
      </div>
    </div>
  );
};

export default Nav;
