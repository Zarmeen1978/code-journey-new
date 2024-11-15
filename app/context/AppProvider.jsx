import React, { Children, useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        currentCourse,
        setCurrentCourse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
