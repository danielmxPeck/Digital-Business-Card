import React, { Component } from "react";
import "./main.css";

const profileDetails = {
  about:
    "I am a frontend developer with a particular interest in making things simple and automating daily tasks. " +
    "I try to keep up with security and best practices, and am always looking for new things to learn.",
  interest:
    "Latest technology, learning new stuff, spending quality time with love ones. Coffee fanatic, exercising and food.",
};

const Main = () => {
  return (
    <main>
      <h2 className="abt--title">About</h2>
      <p className="abtDetails">{profileDetails.about}</p>
      <h2 className="interest--title">Interest</h2>
      <p className="interestDetails">{profileDetails.interest}</p>
    </main>
  );
};

export default Main;
