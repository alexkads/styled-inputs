import React, { InputHTMLAttributes } from "react";
import "./styles.css";

export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button = ({ children, style }: ButtonProps) => {
  return (
    <button className="Button" style={style}>
      {children}
    </button>
  );
};
