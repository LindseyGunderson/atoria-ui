import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./Progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
  },
};

export const WithLabel: Story = {
  args: {
    value: 40,
    label: "Uploading files",
  },
};

export const ShowValue: Story = {
  args: {
    value: 65,
    showValue: true,
  },
};

export const WithLabelAndValue: Story = {
  args: {
    value: 75,
    label: "Processing interview questions",
    showValue: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Progress value={60} variant="default" />

      <Progress value={75} variant="success" />

      <Progress value={45} variant="warning" />

      <Progress value={25} variant="error" />
    </div>
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
    variant: "success",
    label: "Complete",
    showValue: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 3,
    max: 5,
    label: "Completed steps",
    showValue: true,
  },
};