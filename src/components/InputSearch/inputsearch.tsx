import React from "react";
import { StyledInput } from "./styled";
export interface InputSearchProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[] | undefined;
}

export const InputSearch = ({
  children,
  style,
  value,
  onChange,
}: InputSearchProps) => {
  return (
    <StyledInput style={style} value={value} onChange={onChange}>
      {children}
    </StyledInput>
  );
};
