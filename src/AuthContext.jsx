import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);

  const value = {
    accounts,
    setAccounts,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
