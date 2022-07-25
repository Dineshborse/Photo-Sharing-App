import React from "react";
import { Link } from 'react-router-dom';

import './landingPage.css'


export default function LandingPage() {

  
  return (
    <div className="LandingPage-container">
      <img className="LandingPage-img"src="../../LandingPageImg.jpg" alt="img"></img>
      <div className="LandingPage-div"> 
        <p className="LandingPage-div-p">10x Team 04</p>
        <Link to="/postview">
        <button id="btn-enter" >Enter</button>
        </Link>      
      </div>
    </div>
  );
}
