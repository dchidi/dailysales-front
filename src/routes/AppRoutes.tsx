import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "../features/ProtectedRoute";
import DashboardRoutes from "./DashboardRoutes";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Protected dashboard routes */}
      <Route path="/dashboard/*" element={<ProtectedRoute />}>
        <Route path="*" element={<DashboardRoutes />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
