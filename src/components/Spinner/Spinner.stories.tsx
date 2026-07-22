import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { Button } from "../Button";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="primary" />
      <Spinner variant="muted" />
      <div className="bg-primary p-4">
        <Spinner variant="inverse" />
      </div>
    </div>
  ),
};

export const ButtonExample: Story = {
  render: () => <Button loading>Saving</Button>,
};