import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExperienceImage from "../images/experience.svg";
import "../css/industries.css";
import Car from "../images/car.svg";
import Accessories from "../images/accessories.svg";
import Airline from "../images/airline.svg";
import Entertainment from "../images/entertainment.svg";
import Energy from "../images/energy.svg";
import Technology from "../images/technology.svg";
import Healthcare from "../images/healthcare.svg";
import Food from "../images/food.svg";
import Pharma from "../images/pharma.svg";

function TLog(target) {
  if (target.classList.contains("checked")){
    target.classList.remove("checked");
  } else{
    target.classList.add("checked");
  }
  console.log(target.value);
}

const Industries = (props) => {
  return (
    <>
      <h2>Select industries you're interested in</h2>
      <div class="grid-container">
        <div
          value="auto"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Car} alt="Automotive & E.V." />
          <br />
          Automotive & EV
        </div>
        <div
          value="apparel"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Accessories} alt="Apparel & Accessories" />
          <br />
          Apparel & Accessories
        </div>
        <div
          value="airline"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Airline} alt="Aviation" />
          <br />
          Aviation
        </div>
        <div
          value="entertainment"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Entertainment} alt="Entertainment" />
          <br />
          Entertainment
        </div>
        <div
          value="energy"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Energy} alt="Energy" />
          <br />
          Energy
        </div>
        <div
          value="tech"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Technology} alt="Technology" />
          <br />
          Technology
        </div>{" "}
        <div
          value="health"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Healthcare} alt="Healthcare" />
          <br />
          Healthcare
        </div>
        <div
          value="food"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Food} alt="Food & Beverage" />
          <br />
          Food & Beverage
        </div>
        <div
          value="pharma"
          class="grid-item"
          onClick={(event) => TLog(event.target)}
        >
          <img src={Pharma} alt="Pharmaceuticals" />
          <br />
          Pharmaceuticals
        </div>
      </div>
      <div className="login center">
        <Link className="submit" to="/entername">
          Submit
        </Link>
      </div>
    </>
  );
};

export default Industries;
