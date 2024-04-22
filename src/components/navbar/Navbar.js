import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="">
      <nav className="flex w-full justify-between fixed p-4 items-center bg-white shadow">
        <ul>
          <li>
            <a href="">Logo</a>
          </li>
        </ul>
        <ul className="flex space-x-10">
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">How It Works</a>
          </li>
          <li>
            <a href="">Benifits</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
        <button className="bg-black text-white rounded h-9 px-3">
          Book A call
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
