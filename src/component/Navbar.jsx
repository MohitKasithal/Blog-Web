import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = true;

  return (
    <div className="top">
      <div className="topLeft">
        <h1>BLOG</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          '<li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">lOGOUT</li>
        </ul>
      </div>
      {/* <div className="topCenter">
        <Link to={"/"}>Home</Link>
      </div> */}
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        {/* <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )} */}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
