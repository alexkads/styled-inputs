import React from "react";
import { StyledInput } from "./styled";
export interface InputSearchProps {
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[] | undefined;
}

export const InputSearch = ({ style, value, onChange }: InputSearchProps) => {
  return <StyledInput style={style} value={value} onChange={onChange} />;
};
