import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "ui/site-storefront/Card";
import { ModuleConn } from "ui/types/ModuleConn";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Storefront/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card />;

export const Primary = Template.bind({});
