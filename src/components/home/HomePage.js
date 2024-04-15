import React from "react";
import goatPng from "../assets/goat.png" 

function HomePage() {
  return (
    <div className="px-10 lg:flex text-xs mt-20">
      <div className="pt-40">
        <h1 className="lg:text-6xl font-semibold">
          On demand, unlimited <br />
          <span className="text-orange-600 lg:whitespace-nowrap">design & development</span>
        </h1>
        <p className="text-gray-600 lg:text-2xl mt-4">
          Unlimited revisions and requests. <br />
          Pause or cancel anytime.
        </p>
        <div className="flex space-x-3 mt-5">

        <button  className="bg-[#1A1A17] text-white rounded px-3 h-9">See Plans</button>
        <button  className="border border-[#1A1A17] text-[#1A1A17] rounded px-3 h-9">Watch Intro Video</button>
        </div>

      </div>
      <div>
        <img  src={goatPng} className="h-[200px] lg:h-auto"/>
      </div>
    </div>
  );
}

export default HomePage;
