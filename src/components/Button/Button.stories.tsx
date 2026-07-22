import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Continue",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Cancel",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Saving",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Get Started",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Get Started",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Get Started",
  },
};