import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Product() {
  let tempObj = {
    id: 1,
    userName: "codekul",
  };
  const [userName ,setUserName]=useState(null)
  return (
    <div>
      Product {userName}
      <Outlet context={setUserName} />
    </div>
  );
}

export default Product;
