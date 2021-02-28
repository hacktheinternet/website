import React, { useState } from "react";
import { Link } from "react-router-dom";

const Name = () => {
  const [name, setName] = useState("");
  const onChange = (q) => {
    setName(q);
  };
  return (
    <>
      <div className="header">Enter Name</div>
      <form class="login center">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={name}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
        <Link className="submit" to={`/setlevel/${name}`}>
          Submit
        </Link>
      </form>
    </>
  );
};

export default Name;
