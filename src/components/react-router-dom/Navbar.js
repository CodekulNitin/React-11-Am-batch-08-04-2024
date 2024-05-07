import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow p-5">
      <nav className="flex justify-end space-x-10 mx-5">
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="gallary">Gallary</Link>
        <Link to="contactus">Contact Us</Link>
      </nav>
    </div>
  );
}

export default Navbar;
