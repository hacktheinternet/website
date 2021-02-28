import React from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import User from "../images/user1.svg";
import Rooms from "./Rooms";

const Dashboard = () => {
  return (
    <>
      <div className="top-bar">
        <div className="discover">
          <Link to="/discover">
            <i class="fas fa-search"></i>
          </Link>
        </div>
        <div className="notification">
          <Link to="/discover">
            <i class="far fa-comment-alt"></i>
          </Link>
        </div>
        <div className="stock">
          <Link to="/discover">
            <i class="fas fa-chart-line"></i>
          </Link>
        </div>
        <div className="profile">
          <Link to="/discover">
            <img src={User} className="user-profile"></img>
          </Link>
        </div>
      </div>
      <div className="room-cards">
        <Rooms />
      </div>
    </>
  );
};

export default Dashboard;
