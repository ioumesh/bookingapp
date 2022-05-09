import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="navbarLogo">Booking.com</span>
        <div className="navbarItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
