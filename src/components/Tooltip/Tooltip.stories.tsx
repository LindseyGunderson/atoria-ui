import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Tooltip } from "./Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;


/**
 * Reusable trigger for Tooltip stories.
 * This forwards Tooltip's injected events
 * (hover, focus, aria-describedby) to the button.
 */
const Trigger = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}) => (
  <button
    className="
      rounded-md
      bg-primary
      px-4
      py-2
      text-white
    "
    {...props}
  >
    {children}
  </button>
);


export const Default: Story = {
  render: () => (
    <Tooltip content="Save changes">
      <Trigger>
        Hover me
      </Trigger>
    </Tooltip>
  ),
};


export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-16 p-20">
      <div />

      <Tooltip content="Top tooltip" side="top">
        <Trigger>
          Top
        </Trigger>
      </Tooltip>

      <div />


      <Tooltip content="Left tooltip" side="left">
        <Trigger>
          Left
        </Trigger>
      </Tooltip>


      <Tooltip content="Center tooltip">
        <Trigger>
          Center
        </Trigger>
      </Tooltip>


      <Tooltip content="Right tooltip" side="right">
        <Trigger>
          Right
        </Trigger>
      </Tooltip>


      <div />

      <Tooltip content="Bottom tooltip" side="bottom">
        <Trigger>
          Bottom
        </Trigger>
      </Tooltip>

      <div />
    </div>
  ),
};


export const LongContent: Story = {
  render: () => (
    <Tooltip content="This tooltip contains additional information about this action.">
      <Trigger>
        Hover for details
      </Trigger>
    </Tooltip>
  ),
};


export const IconButton: Story = {
  render: () => (
    <Tooltip content="Delete item">
      <button
        aria-label="Delete item"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-error
          text-white
        "
      >
        ×
      </button>
    </Tooltip>
  ),
};