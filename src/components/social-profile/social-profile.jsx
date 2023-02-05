import React, { Component } from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaCoins,
} from "react-icons/fa";
import "./social-profile.css";

const profile = {
  twiiter: "https://twitter.com/DanielPMX",
  facebook: "https://www.facebook.com/daniel.xuan.5/",
  instagram: "https://www.instagram.com/danielxuan/?hl=en",
  github: "https://github.com/danielmxPeck",
};

const handleSubmit = (profile) => {
  window.open(profile);
};

const SocialFooter = () => {
  return (
    <footer>
        <FaTwitterSquare onClick={() => handleSubmit(profile.twiiter)} style={{cursor:"pointer"}}/>
        <FaFacebookSquare onClick={() => handleSubmit(profile.facebook)} style={{cursor:"pointer"}}/>
        <FaInstagram onClick={() => handleSubmit(profile.instagram)} style={{cursor:"pointer"}}/>
        <FaGithubSquare onClick={() => handleSubmit(profile.github)} style={{cursor:"pointer"}}/>
    </footer>
  );
};

export default SocialFooter;
