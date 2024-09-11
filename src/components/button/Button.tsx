import React from "react";
import style from "./Button.module.css";

interface IButton {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}
export const Button: React.FC<IButton> = ({
  text,
  onClick,
  type = "primary",
}) => {
  return (
    <button onClick={onClick} className={style[type]}>
      {text}
    </button>
  );
};
