import React, { useContext, createContext, useState } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('tkn'));

  const login = (tkn) => {
    sessionStorage.setItem('tkn', tkn);
    setToken(tkn);
  };

  const logout = () => {
    sessionStorage.removeItem('tkn');
    setToken(null);
  };

  const ctx = { login, logout, isUserLoggedIn: !!token };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuthCtx() {
  return useContext(AuthContext);
}

export default AuthProvider;
