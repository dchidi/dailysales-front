import classNames from "classnames";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/index";
import ForgotPassword from "../forgot_password/ForgotPassword";
import style from "./LoginForm.module.css";
import { useLoginForm } from "./useLoginForm";

const LoginForm = () => {
  const { handleLogin } = useLoginForm();
  const frame = classNames("col", style.loginFrame);
  return (
    <div className={style.root}>
      <div className={frame}>
        <h4 className={style.formTitle}>Login Form</h4>
        <Input label="Username" type="text" />
        <Input label="Password" type="password" />
        <Button text="Login" onClick={handleLogin} />
        <ForgotPassword />
      </div>
    </div>
  );
};
export default LoginForm;
