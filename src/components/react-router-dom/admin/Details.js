import React from "react";
import { useOutletContext } from "react-router-dom";

function Details() {
  let paramsData = useOutletContext();
  console.log("paramsData", paramsData);
  return (
    <div>
      Details
      <button onClick={() => paramsData("codekul")}>Add</button>
    </div>
  );
}

export default Details;
