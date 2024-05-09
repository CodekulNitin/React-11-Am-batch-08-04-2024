// Child2.js
import React, { useContext } from "react";
import { UserConsumer } from "./UserContext";

function Child2() {

  const userName = useContext(UserConsumer)
  return (
    <div>
      Child2 {userName.name}
    </div>
  );
}

export default Child2;
