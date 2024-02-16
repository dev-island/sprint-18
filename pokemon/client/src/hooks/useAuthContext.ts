import { useContext } from "react";
import * as api from "../api/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useUserContext";

const useAuthContext = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
    setToken,
    token,
  } = useContext(AuthContext);

  const signUp = async ({ username, password, email }: api.SignUpRequest) => {
    setLoading(true);
    const { data, error } = await api.signUp({
      username,
      password,
      email,
    });
    if (error) {
      return alert(error);
    }
    if (!data) {
      return alert("Error: no data returned from server");
    }
    setIsAuthenticated(true);
    setToken(data.token);
    setLoading(false);
    navigate("/profile");
  };

  const signIn = async ({ username, password }: api.LoginRequest) => {
    setLoading(true);
    const { data, error } = await api.login({ username, password });
    if (error) {
      return alert(error);
    }
    if (!data) {
      return alert("Error: no data returned from server");
    }
    setIsAuthenticated(true);
    setToken(data.token);
    setLoading(false);
    navigate("/profile");
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setToken(undefined);
    navigate("/login");
  };

  const checkIsAuthenticated = () => {
    if (token) {
      setIsAuthenticated(true);
    }
  };

  return {
    signIn,
    signUp,
    isAuthenticated,
    checkIsAuthenticated,
    logout,
    loading,
    token,
  };
};

export default useAuthContext;
