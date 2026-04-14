import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Lorem ipsum</CardTitle>
        <CardDescription>
          Consectetur adipiscing elit sed do eiusmod.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Sed ut perspiciatis</CardTitle>
        <CardDescription>
          Nemo enim ipsam voluptatem quia voluptas.
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Ipsum
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card size="sm">
      <CardHeader>
        <CardTitle>Quis autem</CardTitle>
        <CardDescription>
          Vel eum iure reprehenderit qui in ea voluptate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>At vero eos et accusamus et iusto odio dignissimos.</p>
      </CardContent>
    </Card>
  ),
};
