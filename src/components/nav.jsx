import React, { Component } from "react";
import "./nav.css";
import { HiColorSwatch, HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

const profile = {
  name: "Daniel Peck",
  row: "Frontend Developer",
};

const Navbar = () => {
  return (
    <nav>
      <h2 className="profile--name">{profile.name}</h2>
      <h3 className="profile-row">{profile.row}</h3>
      <div className="btnContainer">
        <button className="emailBtn">
          <HiMail style={{fontSize:"22px",verticalAlign:"text-top",paddingRight:"5px"}}  /> 
          Email
        </button>
        <button className="LinkedinBtn">
          <AiFillLinkedin style={{fontSize:"22px", verticalAlign:"text-top",paddingRight:"5px"}}/>
          LinkedIn
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
