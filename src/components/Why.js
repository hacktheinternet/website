import React from "react";
import "../css/why.css";
import ExperienceImage from "../images/experience.svg";
import RoomsImage from "../images/chat.svg";

const Why = () => {
  return (
    <>
      <div className="lb">Why Stalk?</div>
      <div>
        <p id="why-stalk">
          {" "}
          <img src={ExperienceImage} alt="Experience" /> <br /> <i>TLDR:</i>{" "}
          You're in control! <br /> <br /> Stalk is a <b>decentralized</b>{" "}
          investing discussion platform. <br /> <br /> You connect to a network
          of peers who curate the <b>best</b> content for you. No censorship,
          just the power of people! <br /> <br />{" "}
          <img src={RoomsImage} alt="Experience" />
          <br /> Once in Stalk, you can <u>s</u>tock <u>talk</u>
          &nbsp;with people who share <b>your</b> interests and want to help{" "}
          <b>you</b> be the best investor you can be. Don't like content? Just
          stop watching or unpeer that creator.
        </p>
      </div>
      <div className="ft">Developed with ♥️ by PANJACS</div>
    </>
  );
};

export default Why;
