import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/ExperienceCenter.css";

class ExperienceCenter extends React.Component {
  render() {
    return (
      <>
        <h1>Experience Center</h1>
        <p> Socializing Stock Catchy Caption Here! </p>
        <div className="login center">
        <Link className="submit" to="/entername">
          Test
        </Link>
        </div>
      </>
    );
  }
}

export default ExperienceCenter;
