import React from 'react'
import phoneApp  from "../assets/phone-App.png";
import line from "../assets/line.png"
import "../styles/Salut.css"



const Salut = () => {
  return ( 

    <div>
    <img src={phoneApp} alt="phoneApp "/>
    <div className="string">
    <img src= {line} alt="line" />
    </div>
    </div>  
);
};
export default Salut;