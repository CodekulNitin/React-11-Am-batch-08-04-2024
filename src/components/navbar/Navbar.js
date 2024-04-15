import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="fixed w-full text-xs lg:text-base bg-white">
      <nav className="flex justify-between p-2 lg:p-3 shadow items-center lg:px-10 overflow-hidden">
        <ul>
          <li>
            <img src={logo} className="h-[20px] md:h-[40px] w-[50px] md:w-[100px]" />
          </li>
        </ul>
        <div className="hidden lg:block">
          <ul className="flex lg:space-x-10 items-center">
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">How It Works</a>
            </li>
            <li>
              <a href="">Benfits</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button
            type="button"
            className="bg-[#1A1A17] text-white rounded px-3 h-9"
          >
            Book A Call
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
