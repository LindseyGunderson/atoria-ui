import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "OR",
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="h-32">
      <Divider orientation="vertical" />
    </div>
  ),
};

export const Layout: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-4">
      <span>Profile</span>

      <Divider orientation="vertical" />

      <span>Settings</span>
    </div>
  ),
};