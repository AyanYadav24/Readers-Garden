import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) { //children pass karne ka matlab jitne sare child components hai like signup.jsx login.jsx banner.jsx etc sab paaas ho jayege ek baar mie hi
  const initialAuthUser = localStorage.getItem("Users"); //localstorage mei jo user save hua hai uska data
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
