import React, { createContext, useState, useContext } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Dummy login function (later replace with API)
  const login = (email, password) => {
    const dummyUser = { id: 1, name: "Test User", email };
    setUser(dummyUser);
    console.log("Logged in:", dummyUser);
  };

  // Dummy signup function
  const signup = (name, email, password) => {
    const newUser = { id: Date.now(), name, email };
    setUser(newUser);
    console.log("Signed up:", newUser);
  };

  // Logout
  const logout = () => {
    setUser(null);
    console.log("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy usage
export const useAuth = () => useContext(AuthContext);
