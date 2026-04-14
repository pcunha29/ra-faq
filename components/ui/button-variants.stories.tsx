import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Plus } from "lucide-react";

import { Button } from "./button";
import { buttonSizeKeys, buttonVariantKeys } from "./button-variants";

function isIconSize(size: (typeof buttonSizeKeys)[number]) {
  return size === "icon" || size.startsWith("icon-");
}

function ButtonVariantsGallery() {
  return (
    <div className="space-y-10 p-6">
      {buttonVariantKeys.map((variant) => (
        <section key={variant}>
          <h2 className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {variant}
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {buttonSizeKeys.map((size) => (
              <div key={size} className="flex flex-col items-center gap-1.5">
                <Button variant={variant} size={size}>
                  {isIconSize(size) ? <Plus aria-hidden /> : "Button"}
                </Button>
                <span className="max-w-18 text-center text-[10px] text-muted-foreground leading-tight">
                  {size}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta = {
  title: "UI/Buttons Variants",
  component: ButtonVariantsGallery,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonVariantsGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariantsAndSizes: Story = {
  render: () => <ButtonVariantsGallery />,
};
