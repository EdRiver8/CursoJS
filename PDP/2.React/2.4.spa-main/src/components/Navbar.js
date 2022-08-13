import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { SiNetflix } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <SiNetflix />
            Netflix
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
