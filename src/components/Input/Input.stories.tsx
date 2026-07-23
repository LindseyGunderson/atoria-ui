import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your email",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email address",
    placeholder: "you@example.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    helperText: "Must be at least 8 characters long.",
  },
};

export const Error: Story = {
  args: {
    label: "Email address",
    value: "invalid-email",
    error: "Please enter a valid email address.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    value: "username123",
    disabled: true,
  },
};

export const Email: Story = {
  args: {
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
  },
};

export const Required: Story = {
  args: {
    label: "Full name",
    required: true,
    placeholder: "Jane Doe",
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Default" placeholder="Default input" />

      <Input label="Helper text" helperText="Additional information." />

      <Input label="Error" error="Something went wrong." />

      <Input label="Disabled" disabled value="Disabled input" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="First name" placeholder="Jane" />

      <Input
        label="Email address"
        placeholder="jane@example.com"
        helperText="We'll only use this for account updates."
      />

      <Input
        label="Password"
        type="password"
        error="Password must be at least 8 characters."
      />
    </div>
  ),
};