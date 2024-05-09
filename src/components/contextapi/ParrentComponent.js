import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import { UserInfoProvider, UserProvider } from "./UserContext";

export const AdminUser = React.createContext();
export const SuperAdminUser = React.createContext();

function ParrentComponent() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="text-center py-40">
      ParrentComponent
      <UserProvider value={setUserData}>
        <UserInfoProvider value={userData}>
          <Child1 />
          <Child2 />
          <Child3 />
        </UserInfoProvider>
      </UserProvider>
    </div>
  );
}

export default ParrentComponent;
