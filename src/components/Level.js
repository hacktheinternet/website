import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExperienceImage from "../images/experience.svg";
import "../css/level.css";

const Level = (props) => {
  return (
    <>
      <img src={ExperienceImage} alt="Experience" />
      <p>Hi {props.match.params.value}!</p>
      <h2>What's your level of trading experience?</h2>
      <ul className="preli">
        <li>
          <Link to="/guides">Beginner</Link>
        </li>
        <li>
          <Link to="/type">Intermediate</Link>
        </li>
        <li>
          <Link to="/type">Expert</Link>
        </li>
      </ul>
    </>
  );
};

export default Level;
