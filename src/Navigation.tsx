import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const Navigation = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Navigation;
