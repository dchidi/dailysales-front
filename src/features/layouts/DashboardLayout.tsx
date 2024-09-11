import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      {/* You can add a shared dashboard layout here, like a sidebar or header */}
      <h1>Dashboard</h1>
      <Outlet /> {/* Renders the child routes */}
    </div>
  );
};
export default DashboardLayout;
