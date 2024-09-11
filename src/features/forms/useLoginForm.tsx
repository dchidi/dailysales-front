import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const useLoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Authenticate the user
    navigate("/dashboard"); // Navigate to the dashboard after login
  };
  return { handleLogin };
};
