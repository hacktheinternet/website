import React from "react";
import "./../css/Resources.css";
import { Helmet } from "react-helmet";

const Resources = () => {
  return (
    <>
      <Helmet>
        <style>{"body { background-color: black; color: white; } h2,h5,p {color: var(--text);}"}</style>
      </Helmet>
      <h2>New to the game?</h2>
      <h5>Don't worry. We've got you covered!</h5>
      <p>
        Here are some resources for you to quickly understand and get started
        with the trading business.
      </p>
      <div className="card-group">
        <div className="card">
          <div className="header">Test</div>
          <div className="header">Test</div>
        </div>
      </div>
    </>
  );
};

export default Resources;
