import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FaqSection } from "./faq-section";

const mockItems = [
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Ut enim ad minim veniam?",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Excepteur sint occaecat cupidatat?",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

const meta = {
  title: "Site/FaqSection",
  component: FaqSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FaqSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Lorem Ipsum",
    subtitle: "Dolor sit amet consectetur adipiscing elit.",
    items: mockItems,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Sed Do Eiusmod",
    items: mockItems.slice(0, 2),
  },
};
