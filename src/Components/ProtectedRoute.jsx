import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

export default function ProtectedRoute({ children }) {
  const {userData} = useContext(UserContext)
  const token = userData?.token
  
  return <>{token ?  children  : <Navigate to="/" />}</>;
}
