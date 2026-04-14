import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SearchIcon } from "lucide-react";

import { Input } from "./input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Lorem ipsum...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Lorem ipsum...",
    disabled: true,
  },
};

export const SearchWithButton: Story = {
  render: () => (
    <div className="relative">
      <Input
        type="search"
        placeholder="Lorem ipsum dolor sit..."
        className="h-12 rounded-full bg-background pr-12 pl-5 text-base shadow-sm"
      />
      <button
        type="button"
        className="absolute top-1/2 right-1.5 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        aria-label="Pesquisar"
      >
        <SearchIcon className="size-4" />
      </button>
    </div>
  ),
};
