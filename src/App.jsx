import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Main from "./components/main-content"
import Navbar from "./components/nav"
import SocialFooter from "./components/social-profie"
import './App.css'
import profilePic from "./images/profile-pic.jpeg"

function App() {

  return(
    <div className="App">
      <img className="profilePic" src={profilePic}  alt="profile--picture"/>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
