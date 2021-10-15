import styled, {
  css, DefaultTheme
} from "styled-components";
import { theme } from "../../styles/theme";

export interface StyledButtonProps {
  colorDark: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: rgb(113, 111, 111);
  width: 200px;
  height: 200px;

  ${({ theme: DefaultTheme, colorDark }) => css`
    color: ${colorDark
      ? theme.colors.primaryColor
      : theme.colors.white};
  `}
`;
