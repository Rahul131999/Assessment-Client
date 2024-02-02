import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const currentUser = {n:""}
  return currentUser ? <Outlet/> : <Navigate to="/"/>
}