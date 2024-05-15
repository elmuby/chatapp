import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Chatscreen from "../pages/Chatscreen";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ children}) => {
  const { currentUser } = UserAuth();
  // console.log(currentUser)

  if(!currentUser){
    return < Navigate to="/" replace={true} />
  }

  return children;
 
}

export default PrivateRoute;
