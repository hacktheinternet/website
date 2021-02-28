import React from "react";
import Logo from "./../images/logo-light.png";

const Navbar = () => {
  return (
    <>
      <div className="header ic">
        <img src={Logo} className="logo" alt="Stalk"></img>
      </div>
    </>
  );
};

export default Navbar;
