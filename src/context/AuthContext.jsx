import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../authentication/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, isLoading] = useState(false);

  // sign in with google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // set currentUser
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
      setCurrentUser(user);
      isLoading(false);
    });
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider >
  );
};

export const UserAuth = () => {
  return useContext(AuthContext)
};
