import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute setUserData={setUserData}>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
