import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Lindsay Smith",
  },
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=47",
    alt: "Profile picture",
    name: "Lindsay Smith",
  },
};

export const WithInitials: Story = {
  args: {
    name: "Lindsay Smith",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Lindsay Smith" size="sm" />
      <Avatar name="Lindsay Smith" size="md" />
      <Avatar name="Lindsay Smith" size="lg" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Lindsay Smith" variant="circle" />

      <Avatar name="Lindsay Smith" variant="square" />
    </div>
  ),
};

export const Empty: Story = {
  args: {},
};
