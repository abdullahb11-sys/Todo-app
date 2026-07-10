import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<DashboardLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
}