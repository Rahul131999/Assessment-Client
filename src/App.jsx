import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
