import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../contexts/AuthProvider";
import { useContext } from "react";

interface AuthContextData {
  isLogged: boolean;
}

export const PrivateRoute = () => {
  const { isLogged } = useContext(AuthContext) as AuthContextData;

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
