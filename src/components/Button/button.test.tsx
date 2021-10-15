import React from "react";
import { Button } from "../Button";
import { screen } from "@testing-library/react";
import { renderTheme } from "./../../utils/renderTheme";
import { theme } from "../../styles/theme";

test("should render with default values", () => {
  renderTheme(<Button colorDark={true}>Texto</Button>);
  const button = screen.getByRole("button", { name: "Texto" });
  expect(button).toHaveStyle({
    color: theme.colors.primaryColor,
  });
});
