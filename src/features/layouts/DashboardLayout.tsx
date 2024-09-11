import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Renders the child routes */}
    </div>
  );
};
export default DashboardLayout;
