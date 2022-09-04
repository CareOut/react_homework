import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ auth, children }) {
  return auth ? children : <Navigate to={"/login"} replace />;
}
