import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvier = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvier;
