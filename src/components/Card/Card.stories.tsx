import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <h3 className="text-lg font-semibold text-text-primary">
          Project Overview
        </h3>
        <p className="mt-2 text-text-secondary">
          This card demonstrates the default surface style.
        </p>
      </Card>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div className="max-w-md">
      <Card variant="outlined">
        <h3 className="text-lg font-semibold text-text-primary">
          Outlined Card
        </h3>
        <p className="mt-2 text-text-secondary">A card without elevation.</p>
      </Card>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <h3 className="text-lg font-semibold text-text-primary">
          Project Overview
        </h3>
        <p className="mt-2 text-sm text-text-secondary">
          A flexible card component built with Atoria UI tokens and reusable
          design patterns.
        </p>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="max-w-md">
      <Card>
        <h3 className="text-lg font-semibold text-text-primary">Atoria UI</h3>
        <p className="mt-2 text-sm text-text-secondary">
          A component library built with React, TypeScript, and Storybook.
        </p>
        <button className="mt-4 text-sm font-medium text-primary hover:text-primary-hover">
          View Components
        </button>
      </Card>
    </div>
  ),
};
