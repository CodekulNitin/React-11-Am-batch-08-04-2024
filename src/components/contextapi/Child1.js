import React, { useContext } from "react";
import { UserConsumer } from "./UserContext";

function Child1() {
  return (
    <div>
      <h1>Child1</h1>
      <UserConsumer>
        {(userData) => {
          return <h1>Hello {userData.name}</h1>;
        }}
      </UserConsumer>
    </div>
  );
}

export default Child1;
