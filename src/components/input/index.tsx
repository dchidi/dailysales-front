import React from "react";
import style from "./Input.module.css";
import classNames from "classnames";

interface IInput {
  label?: string;
  placeholder?: string;
  align?: "row" | "col";
  type: "text" | "password" | "number";
}

export const Input: React.FC<IInput> = ({
  label,
  placeholder,
  align = "col",
  type = "text",
}) => {
  const inputAlignment = classNames(align);
  return (
    <div className={inputAlignment}>
      <label className={style.label}>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export const TextAreaInput: React.FC = () => {
  return (
    <div>
      <label></label>
      <textarea></textarea>
    </div>
  );
};
