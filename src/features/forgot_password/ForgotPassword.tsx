import React from "react";
import style from "./ForgotPassword.module.css";
const ForgotPassword: React.FC = () => {
  return (
    <div className={style.root}>
      Forgot your password? <a href=""> Click to retrieve!</a>
    </div>
  );
};

export default ForgotPassword;
