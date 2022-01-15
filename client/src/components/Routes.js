import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Settings from "../pages/Settings";
import Tasks from "../pages/Tasks";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Tasks />} />
        <Route path="/settings" element={<Settings /> } />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
