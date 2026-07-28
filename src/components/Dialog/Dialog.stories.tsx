import type { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogCloseButton,
} from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>

      <DialogContent>
        <DialogCloseButton />

        <DialogHeader>
          <DialogTitle>Delete account?</DialogTitle>

          <DialogDescription>
            This action cannot be undone. All of your data will be permanently
            removed.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>Cancel</DialogClose>

          <button>Delete</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Delete Project</DialogTrigger>

      <DialogContent>
        <DialogCloseButton />

        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>

          <DialogDescription>
            This will permanently remove your project and all associated data.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>Cancel</DialogClose>

          <button className="rounded-md bg-red-600 px-4 py-2 text-white">
            Delete
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger>Small</DialogTrigger>

        <DialogContent size="sm">
          <DialogTitle>Small Dialog</DialogTitle>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>Medium</DialogTrigger>

        <DialogContent size="md">Medium Dialog</DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>Large</DialogTrigger>

        <DialogContent size="lg">Large Dialog</DialogContent>
      </Dialog>
    </div>
  ),
};