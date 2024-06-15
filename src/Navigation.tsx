import Home from "./pages/Home";
import Signin from "./pages/signin";
import { Route, Routes } from "react-router-dom";

const Navigation = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<Signin />} />
  </Routes>
);

export default Navigation;
