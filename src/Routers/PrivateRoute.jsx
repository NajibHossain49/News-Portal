import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div><span className="loading loading-bars loading-xs"></span></div>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" replace={true} />;
};

export default PrivateRoute;
