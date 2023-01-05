import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "ui/site-storefront/Card";
import { ModuleConn } from "ui/types/ModuleConn";

export default {
  title: "Storefront/Molecules/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  moduleConn: {
    id: 1,
    ModulePageId: 1,
    ModuleNodeId: 1,
    isActive: true,
    ModulePage: {
      id: 1,
      code: "ahihi",
      slug: "/",
      isActive: true
    },
    ModuleNode: {
      id: 1,
      code: "aa",
      name: "ss"
    }
  }
}