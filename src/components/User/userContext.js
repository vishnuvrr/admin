import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      age: "0",
      office: "office ",
      postion: "Position ",
      salary: "0",
      startDate: "2021-08-15",
      userName: "User ",
    },
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};
