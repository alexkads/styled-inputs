import React, { InputHTMLAttributes } from "react";
import "./styles.css";

export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLButtonElement>;
  value?: string | number | readonly string[] | undefined;
}

export const InputSearch = ({
  children,
  style,
  value,
  onChange,
}: ButtonProps) => {
  return (
    <button
      className="InputSearch"
      style={style}
      value={value}
      onChange={onChange}
    >
      {children}
    </button>
  );
};
