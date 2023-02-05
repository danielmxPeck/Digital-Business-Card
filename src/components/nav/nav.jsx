import React, { Component } from "react";
import "./nav.css";
import { HiColorSwatch, HiMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";

const profile = {
  name: "Daniel Peck",
  row: "Frontend Developer",
  linkedin: "https://www.linkedin.com/in/daniel-peck-ming-xuan-1b21a7109",
};

const handleSubmit = (e) => {
  e.preventDefault();
  open(profile.linkedin);
};

const Navbar = () => {
  return (
    <nav>
      <h2 className="profile--name">{profile.name}</h2>
      <h3 className="profile-row">{profile.row}</h3>
      <div className="btnContainer">
        <a href="mailto:danielxuan98@gmail.com">
          <button className="emailBtn">
            <HiMail
              className="HiMail"
              style={{
                fontSize: "22px",
                paddingRight: "5px",
                verticalAlign: "text-top",
                boxShadow: " 0px 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            />
            Email
          </button>
        </a>
        <button className="LinkedinBtn" onClick={handleSubmit}>
          <AiFillLinkedin
            style={{
              fontSize: "22px",
              verticalAlign: "text-top",
              paddingRight: "5px",
            }}
          />
          LinkedIn
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
