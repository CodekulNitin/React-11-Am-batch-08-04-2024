import React from "react";
import { useNavigate } from "react-router-dom";

let tempObj = {
  id: 1,
  userName: "Codekul",
};
function HomePage() {
  let navigate = useNavigate();



  return (
    <div className="text-center py-5">
      {/* <button
        type="button"
        onClick={() => {
          navigate("gallary", { state: tempObj });
        }}
        className="bg-blue-900 text-white rounded px-3 py-1"
      >
        Gallary
      </button> */}
    </div>
  );
}

export default HomePage;
