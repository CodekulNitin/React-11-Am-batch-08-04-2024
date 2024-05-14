import React from "react";

const UserContext = React.createContext();
const UserInfoContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

//

const UserInfoProvider = UserInfoContext.Provider
const UserInfoConsumer = UserInfoContext.Consumer

export { UserProvider, UserConsumer ,UserInfoProvider,UserInfoConsumer};
