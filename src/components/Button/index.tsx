import React, { InputHTMLAttributes } from "react";
import { StyledButton } from "./styles";

export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
