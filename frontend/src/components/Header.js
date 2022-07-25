import React from "react";
import { Link } from 'react-router-dom';
import './header.css'

const Header = (Props) => {

    return (
        <div className="header-container">
            <div className="header-body">
            <div className="header-logo-div">
                <img className="header-logo-img" src="../../circle.svg" alt="logo"></img>
                <p className="header-logo-name">Instaclone</p>
            </div>
            <Link to="/postform">
            <img className="header-camera-icon" src="../../camera.png" alt="camera icon"></img>
            </Link>
            </div>
        </div>
    );
}
export { Header }