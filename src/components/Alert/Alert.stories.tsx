import type { Meta, StoryObj } from "@storybook/react";
import { CheckIcon } from "../../stories/icons/CheckIcon";
import { Icon } from "../Icon/Icon";

import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is an informational alert message.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Unable to save changes",
    children: "Please check your connection and try again.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Your session is about to expire",
    children: "Please save your work before continuing.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "You can update your profile information at any time.",
  },
};

export const WithIcon: Story = {
  render: () => (
    <Alert
      variant="success"
      icon={<Icon icon={CheckIcon} />}
      title="Profile updated"
    >
      Your changes were saved successfully.
    </Alert>
  ),
};
