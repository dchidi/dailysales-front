import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sales: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Logout</button>
    </div>
  );
};

export default Sales;
