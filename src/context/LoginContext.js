import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const getTokenId = () => {
    const tokenId = localStorage.getItem("token");
    return JSON.parse(tokenId);
  };

  const [auth, setAuth] = useState(getTokenId());

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };

  const contextState = {
    auth,
    setAuth,
    logout,
  };

  return (
    <LoginContext.Provider value={contextState}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
