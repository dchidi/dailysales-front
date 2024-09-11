import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "./DashboardLayout.module.css";
import { useAuth } from "../../context/AuthContext";

const DashboardLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <div className={style.root}>
        <div>
          <div>Petcover</div>
          <h4>
            Daily Sales Report <span className={style.date}>11/08/2024</span>
          </h4>
        </div>
        <div className={style.rightAligned}>
          <Button text="All Geo" onClick={() => {}} type="light" />
          <Button
            text="Report at 11 Jan 2024"
            onClick={() => {}}
            type="light"
          />
          <Button text="Logout" onClick={handleLogin} type="light" />
        </div>
      </div>
      <Outlet /> {/* Renders the child routes */}
    </div>
  );
};
export default DashboardLayout;
