import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../index";

test("Link changes the class when hovered", () => {
  renderer.create(<Button style={{ backgroundColor: "red" }}>Facebook</Button>);
});
