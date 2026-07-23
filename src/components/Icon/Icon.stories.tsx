import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

import { SearchIcon } from "../../../src/stories/icons/SearchIcon";
import { CheckIcon } from "../../../src/stories/icons/CheckIcon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: {
    icon: SearchIcon,
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: SearchIcon,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={SearchIcon} size="sm" />

      <Icon icon={SearchIcon} size="md" />

      <Icon icon={SearchIcon} size="lg" />
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={SearchIcon} />

      <Icon icon={CheckIcon} className="text-primary" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon icon={SearchIcon} className="text-primary" />

      <Icon icon={CheckIcon} className="text-text-secondary" />

      <div className="bg-primary p-2">
        <Icon icon={CheckIcon} className="text-white" />
      </div>
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={SearchIcon} />

      <Icon icon={CheckIcon} decorative={false} label="Completed" />
    </div>
  ),
};