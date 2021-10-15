import React from "react";
import { InputSearch } from "../InputSearch";
//import { render, screen } from "@testing-library/react";
import { renderTheme } from "./../../utils/renderTheme";

test("should render with default values", () => {
  renderTheme(<InputSearch />);
});
