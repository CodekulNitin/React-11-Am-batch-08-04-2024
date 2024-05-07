import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  let tempObj = {
    id: 1,
    userName: "Codekul",
  };

  return (
    <div className="text-center py-5">
      <button
        type="button"
        onClick={() => {
          navigate("gallary", { state: tempObj });
        }}
        className="bg-blue-900 text-white rounded px-3 py-1"
      >
        Gallary
      </button>
    </div>
  );
}

export default HomePage;
