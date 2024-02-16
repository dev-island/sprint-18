import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import * as api from "../api/auth";

type Props = {
  children?: React.ReactNode;
};

type IAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
  setToken: (value: any) => void;
  token: string | undefined;
};

const initialContext: IAuthContext = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loading: false,
  setLoading: () => {},
  setToken: () => {},
  token: undefined,
};

export const AuthContext = createContext<IAuthContext>(initialContext);

const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useLocalStorage("token", undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        setToken,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
