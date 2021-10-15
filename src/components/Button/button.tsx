import React, { InputHTMLAttributes } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  colorDark: boolean;
}

export const Button = ({ children, style, onClick, colorDark }: ButtonProps) => {
  return (
    <StyledButton style={style} colorDark={colorDark} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
