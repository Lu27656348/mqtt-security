import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RedirectPanel = ({ user, token, children,redirectTo = "/dashboard/home",}) => {
  if ( token) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export const RedirectLogin = ({ token,children, redirectTo = "/login",}) => {
  if (!token) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};
