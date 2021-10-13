import React, { InputHTMLAttributes } from "react";
import "./styles.css";

export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button className="Button" style={style} onClick={onClick}>
      {children}
    </button>
  );
};
