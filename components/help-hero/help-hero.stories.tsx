import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HelpHero } from "./help-hero";

const meta = {
  title: "Site/HelpHero",
  component: HelpHero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HelpHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem ipsum",
    highlight: "dolor sit?",
    subtitle: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    placeholder: "Lorem ipsum...",
  },
};
