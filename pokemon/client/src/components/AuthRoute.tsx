import { useContext } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthRoute;
