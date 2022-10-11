import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Routing = () => {
  function RequireAuth({ children, redirectTo }: any) {
    let isAuthenticated: string | null =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth redirectTo="/login">
            <Home />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
