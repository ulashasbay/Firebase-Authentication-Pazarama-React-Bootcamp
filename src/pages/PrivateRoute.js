import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// react router private page için gerekli fonksiyon
function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/landingpage" />;
}

export default PrivateRoute;
