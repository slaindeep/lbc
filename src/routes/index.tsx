import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Other routes */}
    </Routes>
  );
};

export default AppRoutes;
