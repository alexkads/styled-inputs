import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { InputSearch } from ".";

export default {
  title: "InputSearch",
  component: InputSearch,
} as Meta;

const Template: Story<ComponentProps<typeof InputSearch>> = args => (
  <InputSearch {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {};
