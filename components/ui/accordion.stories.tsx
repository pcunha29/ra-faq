import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

const items = [
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Ut enim ad minim veniam?",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Excepteur sint occaecat cupidatat?",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
]

function AccordionDemo() {
  return (
    <div className="mx-auto max-w-lg p-6">
      <Accordion defaultValue={[0]}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={index}
            className="data-panel-open:border-primary not-last:data-panel-open:border-b-2"
          >
            <AccordionTrigger className="hover:text-primary data-panel-open:text-primary [&[data-panel-open]>svg]:text-primary [&:hover>svg]:text-primary">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const meta = {
  title: "UI/Accordion",
  component: AccordionDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
