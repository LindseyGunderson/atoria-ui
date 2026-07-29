import type { Meta, StoryObj } from "@storybook/react";

import { ToastProvider, useToast } from "./ToastProvider";

import { ToastContainer } from "./ToastContainer";

function ToastDemo() {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          title: "Profile updated",
          description: "Your changes were saved successfully.",
          variant: "success",
        })
      }
      className="
        rounded-md
        bg-neutral-900
        px-4
        py-2
        text-sm
        text-white
      "
    >
      Show Toast
    </button>
  );
}

const meta = {
  title: "Components/Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastContainer />
      </ToastProvider>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

function ToastButton({
  variant = "info",
}: {
  variant?: "success" | "error" | "warning" | "info";
}) {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          title: `${variant} notification`,
          description: "This is an example toast notification.",
          variant,
        })
      }
      className="
        rounded-md
        bg-neutral-900
        px-4
        py-2
        text-sm
        text-white
      "
    >
      Show {variant} Toast
    </button>
  );
}

export const Default: Story = {
  render: () => <ToastButton />,
};

export const Success: Story = {
  render: () => <ToastButton variant="success" />,
};

export const Error: Story = {
  render: () => <ToastButton variant="error" />,
};

export const Warning: Story = {
  render: () => <ToastButton variant="warning" />,
};

export const Info: Story = {
  render: () => <ToastButton variant="info" />,
};

export const Multiple: Story = {
  render: () => {
    const Demo = () => {
      const { addToast } = useToast();

      return (
        <button
          onClick={() => {
            addToast({
              title: "Upload complete",
              description: "Your file has been uploaded.",
              variant: "success",
            });

            setTimeout(() => {
              addToast({
                title: "New message",
                description: "You received a new notification.",
                variant: "info",
              });
            }, 300);

            setTimeout(() => {
              addToast({
                title: "Storage warning",
                description: "You are almost out of space.",
                variant: "warning",
              });
            }, 600);
          }}
          className="
            rounded-md
            bg-neutral-900
            px-4
            py-2
            text-sm
            text-white
          "
        >
          Show Multiple Toasts
        </button>
      );
    };

    return <Demo />;
  },
};