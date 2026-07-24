import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Notes",
    placeholder: "Add your notes here...",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Task Description",
    helperText: "Include details that help us understand your request.",
  },
};

export const Error: Story = {
  args: {
    label: "Task Description",
    placeholder: "Describe your task...",
    defaultValue: "Short description",
    error: "Please enter more than 20 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "Task Description",
    defaultValue:
      "Enter a task description that is relevant to the task at hand.",
    disabled: true,
  },
};

export const Resize: Story = {
  args: {
    label: "Description",
    placeholder: "Drag the bottom corner to resize...",
    rows: 3,
  },
};

export const LongContent: Story = {
  args: {
    label: "Description",
    defaultValue: `This is an example of longer content inside a textarea.

It demonstrates how multiple lines of text are displayed.

The component should remain readable and comfortable to use.`,
    rows: 6,
  },
};