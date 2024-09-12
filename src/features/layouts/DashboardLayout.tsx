import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import style from "./DashboardLayout.module.css";
import { useAuth } from "../../context/AuthContext";
import DatePicker from "../../components/date_picker/DatePicker";
import Modal from "../../components/modal/Modal";
import { useState } from "react";

const DashboardLayout: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div className={style.root}>
        <div>
          <div>Petcover</div>
          <h4>
            Daily Sales Report <span className={style.date}>11/08/2024</span>
          </h4>
        </div>
        <div className={style.rightAligned}>
          <Button text="All Geo" onClick={openModal} type="light" />
          <DatePicker />
          <Button text="Logout" onClick={handleLogin} type="light" />
        </div>
      </div>
      <Outlet /> {/* Renders the child routes */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content!</p>
      </Modal>
    </>
  );
};
export default DashboardLayout;
