import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SiteNavbar } from "@/components/site-navbar/site-navbar";
import { SITE_LOGO_SRC, SOCIAL_LINKS } from "@/lib/mock-data";

const meta = {
  title: "Site/Navigation Bar",
  component: SiteNavbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SiteNavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: SITE_LOGO_SRC,
    ...SOCIAL_LINKS,
  },
};
