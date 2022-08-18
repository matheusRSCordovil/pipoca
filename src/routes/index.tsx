import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
