import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "neutral",
    children: "New",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <Badge variant="neutral">Neutral</Badge>

      <Badge variant="primary">Primary</Badge>

      <Badge variant="success">Success</Badge>

      <Badge variant="warning">Warning</Badge>

      <Badge variant="error">Error</Badge>

      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>

      <Badge size="md">Medium</Badge>
    </div>
  ),
};

export const StatusExamples: Story = {
  render: () => (
    <div className="flex flex-1 gap-3">
      <Badge variant="success">Active</Badge>

      <Badge variant="warning">Pending Review</Badge>

      <Badge variant="error">Failed</Badge>

      <Badge variant="primary">Beta</Badge>
    </div>
  ),
};