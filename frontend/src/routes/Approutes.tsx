import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DashboardLayout } from "../layouts/dashboard";
import { TasksPage } from "../pages/taskPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}