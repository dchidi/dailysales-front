import React from "react";
import { Routes, Route } from "react-router-dom";
import Sales from "../pages/dashboard/Sales";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../features/layouts/DashboardLayout";
import { ReportingProvider } from "../context/ReportingContext";

const DashboardRoutes: React.FC = () => {
  return (
    <ReportingProvider>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Sales />} />
          <Route path="sales" element={<Sales />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ReportingProvider>
  );
};

export default DashboardRoutes;
