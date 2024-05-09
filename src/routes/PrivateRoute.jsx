import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Chatscreen from "../pages/Chatscreen";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const { currentUser } = UserAuth();

  const [isAuthenticated, setIsAunthenticated] = useState(
    currentUser ? true : false
  );

  return isAuthenticated ? (
    // <component {...rest} />
    <Chatscreen />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
